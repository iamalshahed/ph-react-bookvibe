/**
 * first e get krsi je jodi localstr e kono data thake tahole sei dataguloke age dhore ano
 */
const getStoredDB = () => {
  /**
   * localstr theke data get krtese storedBookSTR()
   */
  const storedBookSTR = localStorage.getItem("readList");

  /**
   * then checking chalaitese je storedBookSTR ki true kina. jodi trure hoi taile if ar naile else
   */
  if (storedBookSTR) {
    /**
     * storedBookData() te localstr theke age theke pawa datagulu array of object e convert krtese
     */
    const storedBookData = JSON.parse(storedBookSTR);

    /**
     * then aray of obj e convert kore return kore ditese
     */
    return storedBookData;
  } else {
    /**
     * ar jodi localstr e age theke kono data na thake atile sudhumatro empty ekta array return krtese
     */
    return [];
  }
};

/**
 * localstr e data set krtese
 */
const addToStoredDB = (id) => {
  /**
   * jodi localstr theke kono data pai tahole sei data sore krtese storedBookData variable e
   */
  const storedBookData = getStoredDB();

  /**
   * then checking chalaitese je ei datar vitore amr dewa id ta ache kina
   */
  if (storedBookData.includes(id)) {
    /**
     * jodi id theke thake tahole alert dekhabe
     */
    alert("vayee..🙂 ei id alrady exist🙂🙂🙂");
  } else {
    /**
     * ar jodi id na thake tahole age storedBookData var e amr id ta push krbe
     */
    storedBookData.push(id);

    /**
     * then data var er moddhe push kora id ta stringify kore set krbe
     */
    const data = JSON.stringify(storedBookData);

    /**
     * and at the last point... sei data ta localstr e set kore dibe
     */
    localStorage.setItem("readList", data);
  }
};

/**
 * export addToStoredDB
 */
export { addToStoredDB, getStoredDB };
