
const nmmcDetails = {
    corporationName : "Navi Mumbai",
    Location : "Navi Mumbai, Maharashtra",
    nmmc : {
         
            type : [ {
                type : "munciple corporation of CIDCO",
                founded: 1992,
                leadership : {
                    commissioner : "Abhijeet Bangar",
                    mayor : "Jayawant Sutar",
                    politicalParty : "BJP",
                    deputyMayor : "Vacant",
                    leaderOfapposition : "Vacant",
                },
                structure : {
                    seats : 111,
                    politicalGroup: {
                        bjp : "51 seats",
                        shs : "45 seats",
                        inc : "13 seats",
                        ncp : "0 seats",
                        other : "4 seats"
                    },
                    elections : {
                        lastElection : 2015,
                    },
                    meetingPlace : {
                        newPlace : "New Headquarters of The Navi Mumbai Munciple Corporation",
                    },
                    website : {
                       web : "www.nmmc.gov.in"
                    },

                    
                }
            }
        ],
        }
    }

    const nmmcDetailsArray = nmmcDetails.nmmc.type
    for (let i=0; i<nmmcDetailsArray.length; i++) {
        let element = nmmcDetailsArray[i]
        if (element.type == 'type'){
            console.log("conditon Match :- ", element)
        }
    }