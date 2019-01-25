import React,{ Component }  from 'react';
    );
  
    const Reminders = ({ reminders }) => (
    // render reminders
    );
    
    render() {
        const reminders // get reminders;
        const filteredReminders = reminders
        .filter(reminder => /* some filter */);
        const { searchValue } = this.state;
  
    return (
        <div>
          <SearchView value={searchValue} onChange={evt => this.setState({ searchValue: evt.target.value }) />
          <Reminders reminders={filteredReminders}/>
        </div>
      )
    }


 }