var FourStaySolo = {}
var loginAccess = require('../TestAssets/FourStayArray')

module.exports = {
    beforeEach: browser => {
        FourStayPage = browser.page.FourStaySolo()
    },
    after: browser => {
        FourStayPage.end()
    },
    'login negative': browser => {
        FourStayPage
        loginAccess.forEach(test => {
            FourStayPage
                .navigate()
                .login(test)
                .expect.element('#login_status').text.to.contain('Invalid credentials. Please try again.').before(2000)
        })
    },
    'login': browser => {
        FourStayPage
            .navigate()
            .login({ email: 'pazarim@gmail.com', password: "HelloWorld", title: 'Find your next perfect stay' })
            .assert.containsText('@dashboardLogo', 'Dashboard')

    },
    'citySearch': browser => {
        FourStayPage
            .citySearch({ city: 'Chicago, IL' })
    },
    'homeSearch': browser => {
        FourStayPage
            .waitForElementPresent('@dashboardLogo', 2000)
            .click('@checkIn')
            .waitForElementPresent('@checkInMonth', 2000)
            .click('@checkInDay')
            .waitForElementPresent('@checkOut', 2000)
            .click('@checkOut')
            .waitForElementPresent('@checkOutMonth', 2000)
            .click('@checkOutDay')
            .waitForElementPresent('@room', 2000)
            .click('@room')
            .waitForElementPresent('@privateRoom', 2000)
            .click('@privateRoom')
            .waitForElementPresent('@roomApplyButton', 2000)
            .click('@roomApplyButton')
            .assert.containsText('@totalResult', 'listings found')
            .waitForElementPresent('@bath', 2000)
            .click('@bath')
            .waitForElementPresent('@privateBath', 2000)
            .click('@privateBath')
            .waitForElementPresent('@bathApplyButton', 2000)
            .click('@bathApplyButton')
            .waitForElementPresent('@image', 2000)
            .pause(5000)
        //now add steps for lsit
    }
    // // 'seach in detail': browser => {
    // //     FourStayPage

    // }
} 