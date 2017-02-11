import { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Member from "./Member.js"

class MemberList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            members: [],
            loading: false,
            administrators: [],
            test: "test"
        }
        this.makeAdmin = this.makeAdmin.bind(this)
        this.removeAdmin = this.removeAdmin.bind(this)
    }

    componentDidMount() {
      this.setState({loading: true})
      fetch("https://api.randomuser.me/?nat=US&results=12")
        .then(response => response.json())
        .then(json => json.results)
        .then(members => this.setState({
          members,
          loading: false
        }))
    }

    testUpdate() {
      this.setState({test: "testParty!"})
    }

    makeAdmin(email) {
      const administrators = [
        ...this.state.administrators,
        email
      ]
      this.setState({administrators})
    }

    removeAdmin(email) {
      const administrators = this.state.administrators.filter(
          adminEmail => adminEmail !== email
      )

      this.setState({administrators})
    }


    render() {
        const { members, loading, test } = this.state
        {console.log(members)}
        {console.log(members.length)}

        setTimeout(() => {
          this.testUpdate();
        }, 1000);
        return (
            <div className="member-list">
              <h1>This is a {test}</h1>
            	<h1>Society Members</h1>

              {
                (loading) ?
                  <span>Loading</span> :
                  <span>{members.length} members</span>
              }

              { (members.length) ?
                  members.map((member, i) =>
                              <Member key={i}
                                      admin={this.state.administrators.some(
                                          adminEmail => adminEmail === member.email
                                        )}
                                      name={member.name.first + " " + member.name.last}
                                      email={member.email}
                                      thumbnail={member.picture.thumbnail}
                                      makeAdmin={this.makeAdmin}
                                      removeAdmin={this.removeAdmin}/>
              ) :
              <span>Currently zero members</span>
            }
            </div>


        )
   }
}

export default MemberList
