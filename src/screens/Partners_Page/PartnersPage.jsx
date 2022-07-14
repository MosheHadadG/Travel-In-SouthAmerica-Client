import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getUsers } from '../../APIs/ServerAPI/users.server';
import Spinner from '../../components/Spinner/Spinner';
import { appContext } from '../../context/appContext';
import PartnerCard from './PartnerCard/PartnerCard';
import PartnersFilter from './PartnersFilter/PartnersFilter';

import './PartnersPage.css'

function PartnersPage() {
  const { token } = useContext(appContext)
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers(token);
      setUsers(users);
    }
    fetchUsers();
  }, []);


  const renderCards = () => {
    const renderedCards = users.map((user) => {
      return <Link key={user._id} to={`/profile/${user._id}`}><PartnerCard user={user} /></Link>
    })

    return renderedCards;
  }

  return (
    <div className='partners-page'>
      {/* <PartnersFilter /> */}
    <div className='partners-page-main'>
      <div className='partners-cards'>
        {users.length > 0 ? renderCards() : <Spinner />}
      </div>
    </div>
  </div>
  )
}

export default PartnersPage