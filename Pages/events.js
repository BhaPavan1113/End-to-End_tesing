class eventsPage{
    constructor(page){
        this.page = page;
        this.eventsPage = page.getByRole('link', { name: 'Events', exact: true });
        this.addEvenet=page.getByRole('button', { name: 'Add New Event' });
    }

    async addEvent(){
        await this.eventsPage.click();
        await this.addEvenet.click();
    }


}

module.exports = {eventsPage};