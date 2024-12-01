import { React } from 'react';
import { useImmer } from 'use-immer';
import "./styles.sass";

function UserProfileWithImmer() {
    const [userProfile, setUserProfile] = useImmer({
        name: "Troy",
        email: "TroyWashington@gmail.com",
        contactDetails: {
            phone: "",
            address: "",
            preferences: {
                newsletter: false,
                notifications: false
            }
        }
    })

    const updateContactDetails = (phone, address) => {
        setUserProfile((draft) => {
            const var1 = phone;
            draft.contactDetails.phone = var1;
            const var2 = address;
            draft.contactDetails.address = var2;
            console.log(
                var1,
                var2
            )
        })
    }

    const toggleNewsLetterSubscription = (newsletter, notifications) => {
        setUserProfile((draft) => {
            const var1 = newsletter;
            draft.contactDetails.preferences.newsletter = var1;
            const var2 = notifications;
            draft.contactDetails.preferences.notifications = var2;
            console.log(
                var1,
                var2
            )
        })
        console.log(document.getElementById('newsletter')?.checked); // Should log the value of the newsletter input
        console.log(document.getElementById('notifications')?.checked); // Should log the value of the notifications input

    }
    const handleButtonClick = () => {
        updateContactDetails(
            document.getElementById('phone').value || '',
            document.getElementById('address').value || ''
        );
        toggleNewsLetterSubscription(
            document.getElementById('newsletter').checked || false,
            document.getElementById('notifications').checked || false
        );
    };



    return (
        <div className='layout'>
            <h4>User input</h4>
            <div className='enter-Info'>
                <div className='section'>
                    <h3>User info</h3>
                    <label>
                        name:
                        <input type='text' id='name' value={userProfile.name} onChange={(e) => setUserProfile((draft) => { draft.name = e.target.value; })} />
                    </label>
                    <label>
                        email:
                        <input type='email' id='email' value={userProfile.email} onChange={(e) => setUserProfile((draft) => { draft.email = e.target.value; })} />
                    </label>
                </div>
                <div className='section'>
                    <h3>contact details</h3>
                    <label>
                        phone:
                        <input type='phone' id='phone' />
                    </label>
                    <label>
                        address:
                        <input type='address' id='address' />
                    </label>
                    <div className='section-userPreferences'>
                        <ul>
                            <li>newsletter
                                <input type='checkbox' id='newsletter' />
                            </li>
                            <li>notifications
                                <input type='checkbox' id='notifications' />
                            </li>
                        </ul>
                    </div>
                    <button onClick={handleButtonClick}>
                        update
                    </button>
                </div>
            </div>
            <h4>User display</h4>
            <div className='contactCard'>
                <div className='section'>
                    <h2>{userProfile.name}</h2>
                    <h4>{userProfile.email}</h4>
                    <p>
                        {userProfile.contactDetails.phone}
                        {/* ({userProfile.contactDetails.phone.slice(0, 3)})-
                        {userProfile.contactDetails.phone.slice(3, 6)}-
                        {userProfile.contactDetails.phone.slice(6, 10)} */}
                    </p>
                    <p>{userProfile.contactDetails.address}</p>
                    <span className={userProfile.contactDetails.preferences.newsletter ? 'ON' : 'OFF'}>
                        Newsletter: {userProfile.contactDetails.preferences.newsletter ? 'subscribed' : 'unsubscribed'}
                    </span>
                    <span className={userProfile.contactDetails.preferences.notifications ? 'ON' : 'OFF'}>
                        Notifications: {userProfile.contactDetails.preferences.notifications ? 'ON' : 'OFF'}
                    </span>
                    <p>{userProfile.contactDetails.preferences.newsletter}</p>
                    <p>{userProfile.contactDetails.preferences.notifications}</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfileWithImmer