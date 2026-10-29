const LEGACY_STORAGE_KEYS = ['walletTransactions', 'savingState'];

export function getUserStorageKey(storageKey, userName) {
  const normalizedUserName = userName.trim().toLowerCase();
  return `${storageKey}:${encodeURIComponent(normalizedUserName)}`;
}

export function migrateLegacyUserData(userName) {
  const destinationUserName = userName?.trim() || 'unassigned';

  LEGACY_STORAGE_KEYS.forEach((storageKey) => {
    const legacyValue = window.localStorage.getItem(storageKey);
    if (legacyValue === null) {
      return;
    }

    const userStorageKey = getUserStorageKey(storageKey, destinationUserName);
    if (window.localStorage.getItem(userStorageKey) === null) {
      window.localStorage.setItem(userStorageKey, legacyValue);
    }
    window.localStorage.removeItem(storageKey);
  });

}
