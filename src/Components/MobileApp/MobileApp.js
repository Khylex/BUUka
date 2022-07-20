import Styles from "./css/styles.module.css"
const MobileApp = () => {
    return (
        <div className={Styles.mobileApp} >
            <div className="my-container">
                <div className={Styles.inner}>
                <div className={`${Styles.imgCon} ${Styles.hide}`}>
                        <img src="./Images/phone.png" alt="phone" />
                   </div>
                   <div className={Styles.content}>
                       <h3>Download our MobileApp for a Seamless Experience</h3>
                       <p>The Universe of Services at your Finger Tip with the Buuka Mobile App - Suitable for Both Clients and Sellers.</p>

                       <div className={Styles.links}>
                           <a  className={Styles.goggle} href="/"><img src="./Images/goggle play.png" alt="Google playstore" /></a>
                           <a className={Styles.apple} href="/"><img src="./Images/App Store.png" alt="AppStore" /></a>
                       </div>
                   </div>

                   <div className={`${Styles.imgCon} ${Styles.show}`}>
                        <img src="./Images/phone.png" alt="phone" />
                   </div>
                </div>
            </div>
        </div>
    )
}

export default MobileApp
