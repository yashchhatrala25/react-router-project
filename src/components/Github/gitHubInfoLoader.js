export const gitHubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/yashchhatrala25')
    return response.json();
}