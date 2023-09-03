// Closure là một hàm có thể ghi nhớ nơi nó được tạo
// + truy cập được biến ở bên ngoài phạm vi của nó
// => tính private trong OOP

function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {}

    const save = () => {
        localStorage.setItem(key, JSON.stringify(store))
    }

    const storage = {
        get(key) {
            return store[key]
        },
        set(key, value) {
            store[key] = value
            save()
        },
        remove(key) {
            delete store[key]
            save()
        }
    }

    return storage
}

// Profile.js
const profileSetting = createStorage('profile_setting')

profileSetting.set('fullName', 'Phu Tam')
profileSetting.set('age', 19)
profileSetting.set('address', 'BN')

console.log(profileSetting.get('fullName'));