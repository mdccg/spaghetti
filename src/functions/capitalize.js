function capitalize(string = 'lACRIMOSA') {
  return string.charAt(0).toUpperCase() + string.substring(1, string.length).toLowerCase();
}

export default capitalize;