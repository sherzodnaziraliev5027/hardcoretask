class EstimateCard{
    get estimateBlock(){
        return $("#resultBlock")
    }
    get checkInstancetype(){
        return $("div[ng-class^='item.items.su']")
    }
    get checkRegion(){
        return $("//div[contains(text(),'Region: Frankfurt')]")
    }
    get checkLocalSSd(){
        return $("//div[contains(text(),'2x375')]")
    }
    get gettingInstanceType(){
        return this.checkInstancetype.getText();
    }
    get gettingRegion(){
        return this.checkRegion.getText();
    }
    get gettingLocalSSd(){
        return this.checkLocalSSd.getText();
    }
    get estimateBlock(){
        return $("//*[@id='resultBlock']/md-card/md-toolbar/div")
    }
    get emailPageButton(){
        return $("//*[@id='Email Estimate']")
    }
    get goToEmailPage(){
        return this.emailPageButton.click()
    }
}
module.exports=new EstimateCard