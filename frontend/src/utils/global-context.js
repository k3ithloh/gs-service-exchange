import create from 'zustand'

const userStore = create((set) => ({
  isAuthenticated: true,
  authenticateUser: () => set((state) => ({ isAuthenticated: true })),
  removeUser: () => set({ isAuthenticated: false }),
}))

export default userStore;