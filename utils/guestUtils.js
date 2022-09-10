export const formatGuests = (guests, options,onlyGuestNumber = false) => {
  console.log(guests);  
  if (!guests) return false;
    const { noInfants } = options || {};
    const { children, adults, infants } = guests;

    const total = adults + children;
    console.log(total);
    if (!total) return 0;

    if(onlyGuestNumber) return total;

    let template = `${total} guest`;
    if (total >= 2) template = `${total} guests`;
    if (infants && !noInfants) template += `, ${infants} infant`;
    return template;
  };