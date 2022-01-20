import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Sidebar from "./components/Sidebar"
import Cities from "./pages/Cities"
import CitysContext from "./utils/CitysContext"
import Login from "./pages/Login"
import Users from "./pages/Users"
import Places from "./pages/Places"
import { EggOutlined, Place } from "@mui/icons-material"
import Products from "./pages/Products"

function App() {
  const [cities, setCities] = useState([])
  const [places, setPlaces] = useState([])
  const [restaurants, setRestaurants] = useState([])
  const [museums, setMuseums] = useState([])
  const [mall, setMall] = useState([])
  const [hotal, setHotel] = useState([])
  const [touristPlace, setTouristPlace] = useState([])
  const [event, setEvent] = useState([])
  const [products, setProducts] = useState([])

  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  const getCities = async () => {
    const response = await axios.get("http://localhost:5000/api/cities")
    setCities(response.data)
    console.log(cities)
  }

  const getPlaces = async () => {
    const response = await axios.get("http://localhost:5000/api/places")
    setPlaces(response.data)
    console.log(places)
    setRestaurants(response.data.filter(place => place.type === "Restaurant"))
    setMuseums(response.data.filter(place => place.type === "Museum"))
    setMall(response.data.filter(place => place.type === "Mall"))
    setHotel(response.data.filter(place => place.type === "Hotel"))
    setTouristPlace(response.data.filter(place => place.type === "TouristPlace"))
    setEvent(response.data.filter(place => place.type === "Event"))

    ////////////Mall
    console.log(event)
  }

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/api/products")
    setProducts(response.data)
    console.log("products")
  }

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/users", {
      headers: {
        Authorization: localStorage.tokenDishBordCity,
      },
    })
    setUsers(response.data)
  }
  useEffect(() => {
    getCities()
    getPlaces()
    getProducts()
    getUsers()
  }, [])

  // -------------------------------------deleteCity------------------------

  const deleteCity = async cityId => {
    console.log("cityId")
    try {
      await axios.delete(`http://localhost:5000/api/cities/${cityId}`, {
        headers: {
          Authorization: localStorage.tokenDishBordCity,
        },
      })
      toast.success("city deleted")
      getCities()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  // --------------------------------detete-userrrr------------------
  const deleteUser = async userId => {
    console.log("userId")
    try {
      await axios.delete(`http://localhost:5000/api/auth/${userId}`, {
        headers: {
          Authorization: localStorage.tokenDishBordCity,
        },
      })
      toast.success("user deleted")
      getUsers()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  // --------------------------------------ADD Admin----------------------
  const addAdmin = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const AdminBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }

      await axios.post(`http://localhost:5000/api/auth/add-admin`, AdminBody, {
        headers: {
          Authorization: localStorage.tokenDishBordCity,
        },
      })
      getUsers()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  // ------------------------------------log in-----------------------
  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const adminBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:5000/api/auth/login", adminBody)
      localStorage.tokenDishBordCity = response.data
      toast.success("login success")
      navigate("/cities")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  //  ----------------------------------------addCity------------------------

  const addCity = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const cityBody = {
        name: form.elements.name.value,
        description: form.elements.description.value,
        photo: form.elements.photo.value,
      }
      await axios.post(`http://localhost:5000/api/cities`, cityBody, {
        headers: {
          Authorization: localStorage.tokenDishBordCity,
        },
      })
      getCities()
      toast.success("add city success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  // ----------------------------------editCity----

  const editCity = async (e, cityId) => {
    e.preventDefault()
    try {
      const form = e.target
      const cityBody = {
        name: form.elements.name.value,
        description: form.elements.description.value,
        photo: form.elements.photo.value,
      }
      await axios.put(`http://localhost:5000/api/cities/${cityId}`, cityBody, {
        headers: {
          Authorization: localStorage.tokenDishBordCity,
        },
      })
      toast.success("city Edit SUCCSESS")
      getCities()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
    }
  }
  // ---------------------------------------------addPlace-------------------------
  const addPlace = async e => {
    e.preventDefault()
    try {
      console.log("uhihiu")
      const form = e.target
      const placeBody = {
        name: form.elements.name.value,
        description: form.elements.description.value,
        logo: form.elements.logo.value,
        location: form.elements.location.value,
        website: form.elements.website.value,
        photos: form.elements.photos.value.split(","),

        city: form.elements.city.value,
        type: form.elements.type.value,
      }
      console.log(placeBody)
      await axios.post(`http://localhost:5000/api/places`, placeBody, {
        headers: {
          Authorization: localStorage.tokenDishBordCity,
        },
      })

      toast.success("place add success")
      getPlaces()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
    }
  }

  // ---------------------------------------deletPlace------------------
  const deletePlace = async placeId => {
    console.log("placeid")
    try {
      await axios.delete(`http://localhost:5000/api/places/${placeId}`, {
        headers: {
          Authorization: localStorage.tokenDishBordCity,
        },
      })
      toast.success("place deleted")
      getPlaces()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  // -------------------------------------------------------edit place----
  const editPlace = async (e, placeId) => {
    console.log(placeId)
    e.preventDefault()
    try {
      const form = e.target
      const placeBody = {
        name: form.elements.name.value,
        description: form.elements.description.value,
        location: form.elements.location.value,
        website: form.elements.website.value,
        logo: form.elements.logo.value,
        photos: form.elements.photos.value.split(","),
        // city: form.elements.city.value,
      }

      await axios.put(`http://localhost:5000/api/places/${placeId}`, placeBody, {
        headers: {
          Authorization: localStorage.tokenDishBordCity,
        },
      })
      toast.success("place Edit SUCCSESS")
      getPlaces()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
    }
  }

  // -------------------------------------------addProducts----------
  const addProduct = async e => {
    e.preventDefault()

    try {
      const form = e.target
      const productBody = {
        name: form.elements.name.value,
        price: form.elements.price.value,
        photo: form.elements.photo.value,
        description: form.elements.description.value,
        place: form.elements.place.value,
      }
      await axios.post(`http://localhost:5000/api/products`, productBody, {
        headers: {
          Authorization: localStorage.tokenDishBordCity,
        },
      })
      getProducts()
      toast.success("Success add product")
    } catch (error) {
      if (error.response) console.log(error.response.data)
    }
  }

  // ---------------------------------------editProduct---------------
  const editProduct = async (e, productId) => {
    console.log(productId)
    e.preventDefault()
    try {
      const form = e.target
      const productBody = {
        name: form.elements.name.value,
        price: form.elements.price.value,
        description: form.elements.description.value,
        photo: form.elements.photo.value,
      }

      await axios.put(`http://localhost:5000/api/products/${productId}`, productBody, {
        headers: {
          Authorization: localStorage.tokenDishBordCity,
        },
      })
      toast.success("product Edit SUCCSESS")
      getProducts()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
    }
  }

  // ------------------------------------------deleteProduct----------
  const deleteProduct = async productId => {
    console.log("productId")
    try {
      await axios.delete(`http://localhost:5000/api/products/${productId}`, {
        headers: {
          Authorization: localStorage.tokenDishBordCity,
        },
      })
      toast.success("product deleted")
      getProducts()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const store = {
    cities,
    places,
    products,
    users,
    deleteCity,
    login,
    addCity,
    editCity,
    addPlace,
    deletePlace,
    editPlace,
    addProduct,
    editProduct,
    deleteProduct,
    deleteUser,
    addAdmin,
  }

  return (
    <CitysContext.Provider value={store}>
      <ToastContainer />
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <Routes>
            <Route path="/cities" element={<Cities />} />
            <Route path="/places" element={<Places />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<Users />} />
            {/* <Route path="/places" element={<Places />} /> */}
            {/* < Route path="/products"element={<Products/>}/> */}
          </Routes>
        </Box>
      </Box>
    </CitysContext.Provider>
  )
}

export default App
