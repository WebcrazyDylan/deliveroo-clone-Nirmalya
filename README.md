# Twitter Clone (Flutter)

This is a repository for TWITTER Clone with Flutter, Dart, AppWrite, Docker.

Funcionalities:

- Authentication via E-Mail & Password
- AppWrite Backend Server
- Notification system
- Image Upload
- Responsive Layout
- 1 To Many Relations (User - Post)
- Many To Many Relations (Post - Comment)
- Following functionality
- Comments / Replies
- Search by HashTags
- View Link Preview inside Posts
- Search User
- RealTime Updates
- DataBase Queries
- Editing Profile Details including Profile/Banner Picture
- Twitter Blue Verification Tag

### Prerequisites

**Flutter SDV ^= 3.7.9**

**Docker (for AppWrite)**

**Android Studio / XCode (Virtual Device Simulation)**

**VS Code (IDE)**

### Cloning the repository

```shell
git clone https://github.com/nayak-nirmalya/twitter_clone_flutter.git
```

## Running Project

Install Docker for AppWrite to Work.

To Install AppWrite via Docker Run:

```shell
docker run -it --rm `
    --volume /var/run/docker.sock:/var/run/docker.sock `
    --volume ${pwd}/appwrite:/usr/src/code/appwrite:rw `
    --entrypoint="install" `
    appwrite/appwrite:1.2.1
```

After Installation Initiate DataBases from Model and add Attributes and Indexes, also configure databaseId, projectId, collections Ids and for Android Emulator to work properly assign your IPv4 Address to localhost.

Then inside root folder run:

```shell
flutter run
```

Select your Device to Run App.

If You Face any Issues while building app. Try running:

```shell
cd android

./gradlew clean
./gradlew build

cd ..
flutter clean
flutter doctor
flutter run
```

## Screenshots

<div align='center'>

### Log In / Sign Up Page

<img src="readme_imgs/login_signup.png" width="360">

### Tweet Feed

<img src="readme_imgs/tweet_feed.png" width="360">

### Tweet Feed with Images & Link Preview

<img src="readme_imgs/link_img_carousel.png" width="360">

### Reply / Comment Page

<img src="readme_imgs/replied_comment.png" width="360">

### Search Tweet by HashTags

<img src="readme_imgs/hasttags.png" width="360">

### Search User

<img src="readme_imgs/search_img.png" width="360">

### User Profile Page

<img src="readme_imgs/profile__page.png" width="360">

### Edit Profile Page

<img src="readme_imgs/edit_profile.png" width="360">

### Notification Tab

<img src="readme_imgs/notification.png" width="360">

### Side Drawer

<img src="readme_imgs/side_drawer.png" width="360">

</div>
