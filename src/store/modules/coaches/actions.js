
//console.log(process.env.VUE_APP_FIREBASE_DATABASE_URL);
export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };

    const token = context.rootGetters.token;

    const response = await fetch(
      `${process.env.VUE_APP_FIREBASE_DATABASE_URL}/coaches/${userId}.json?auth=` +
        token,
      {
        method: 'PUT',
        body: JSON.stringify(coachData)
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // error ...
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId
    });
  },
  async deleteCoach(context,idCoach) {
   // const idCoach = idCoach;
    //const userId = context.rootGetters.userId;
    const token = context.rootGetters.token;
  
    const response = await fetch(
      `${process.env.VUE_APP_FIREBASE_DATABASE_URL}/coaches/${idCoach}.json?auth=` + token,
      {
        method: 'DELETE',
      }
    );
  
    if (!response.ok) {
      // Manejar errores aquí, si es necesario
      const responseData = await response.json();
      console.error('Was not able to delete the Coach:', responseData.error);
      // Puedes lanzar un error o manejarlo de otra manera
      throw new Error('Error to delete the coach');
    }
  
    context.commit('deleteCoach', {
      id: idCoach
    });
    
  },
  
  async loadCoaches(context, payload) {
    
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      `${process.env.VUE_APP_FIREBASE_DATABASE_URL}/coaches.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const coaches = [];

    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
        key:key
        
      };
      coaches.push(coach);
      
    }

    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  }
};