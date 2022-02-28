import requests


def get_repos(username):
    url = f'https://api.github.com/users/{username}/repos'
    response = requests.get(url)
    json_response = response.json()
    return json_response


repositories = get_repos('GreatRaksin')
for repo in repositories:
    print(repo['name'], repo['html_url'])
