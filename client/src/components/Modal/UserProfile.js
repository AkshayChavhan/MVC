
export const Country = {
    India: "India"
}

export const Address = {
    country : Country ,
    address1 : "",
    city : "",
    state : "",
    zipcode : ""
}

export const PersonalInformation = {
    firstname: "",
    lastname: "",
    emailAddress: "",
    address: Address
}


export const PushNotification = {
    everything : false ,
    sameasmail : false ,
    nopushnotification : true
}

export const Notification = {
    byemail : false ,
    pushNotification : PushNotification
}


export const defaultProfileObject = {
    username: "",
    about: "",
    userProfilePicture: {
        url: ""
    },
    personalInformation: PersonalInformation,
    notification : Notification
}






