import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import {
  setproducts,
  
} from "../../reducer/products";
import {  useNavigate } from "react-router-dom";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
  BsCartPlus,
} from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import Swal from "sweetalert2";
import { addcart } from "../../reducer/cart/carts";
////////////////////////////////////////////////////////////////////////////////////////////////////
//component Home
const Home = () => {
  
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(1);
  const [elementId, setElementId] = useState([]);

  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
      products: state.productsReducer.products,
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });

  /////////////////////////////////////////////////////////////////////////////////////////////////////
  //  getAllProducts

  const getAllProducts = async () => {
    await axios
      .get(`http://localhost:3000/products`)
      .then((res) => {
        dispatch(setproducts(res.data.result));

        setShow(true);
      })
      .catch((err) => {
        console.log(err);
        // throw err;
      });
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////
  //

  const addToCart = async (id) => {
    const headers = {
      Authorization: `Bearer ${state.token}`,
    };
    let quantity = 1;
    await axios.post(`/carts/${id}`, { quantity }, { headers }).then((res) => {
      dispatch(addcart(res.data.result));
    });
  };
  //=====================================================
  // const addToWishList = async (id) => {
  //   const headers = {
  //     Authorization: `Bearer ${state.token}`,
  //   };

  //   await axios
  //     .post(`/wishList/${id}`, {}, { headers })
  //     .then((res) => {
        
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  ///////////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    getAllProducts();
  }, []);

  const inc = () => {
    setSkip(skip + 8);
    setPage(page + 1);
  };
  const dec = () => {
    if (page > 1) {
      setSkip(skip - 8);
      setPage(page - 1);
    }
  };

  ///////////////////////////////////////////////////////////////////////////////////////////

  const handlecolor = (element) => {
    setElementId([...elementId, element.id]);
  };

  return (
    <div>
      {/* <div className="header">
        <img
          className="headerImg"
          src="https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          // "https://images.pexels.com/photos/4064826/pexels-photo-4064826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""/>
        <div className="address">
          <h1 className="what">
            DIGITAL
            <br /> MARKETING
          </h1>
          <br />
          <p className="pNewCollection">NEW VERSION 2022</p>
          <br/>
          <button className="joinus" onClick={()=>{navigate("/register")}}>Join us</button>
        </div>
      </div> */}

      {/* <div className="sliderSection">
        <div className="container1">
          <div className="slides-wrapper">
            <div className="img-container">
              <img src=
              // "https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              "https://images.pexels.com/photos/593324/pexels-photo-593324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
               alt=""/>
            </div>
            <div className="img-container text">
              <img
                src="https://images.pexels.com/photos/7430733/pexels-photo-7430733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
            </div>
            
            <div className="img-container">
              <img
                src=
                // "https://images.pexels.com/photos/6483582/pexels-photo-6483582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                "https://images.pexels.com/photos/6476373/pexels-photo-6476373.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt=""
              />
            </div>
          </div>

        </div>
      </div> */}

      <div className="section2">
        <span id="hidden"></span>
       

        {/* /////////////////////////////////////////////////////////////////////////////////////// */}

        <div className="products">
          {show &&
            state.products.map((element,index) => {
              return (
                <div key={index}>
                  <div className="container page-wrapper">
                    <div className="page-inner">
                      <div className="row">
                        <div className="el-wrapper">
                          <div className="box-up">
                            <img
                              className="imgProduct"
                              src={element.image}
                              onClick={() => {
                                navigate(`/products/${element.id}`);
                                window.scrollTo(0, 0);
                              }}
                              alt=""
                            />
                            {/* <div className="img-info">
                              <div className="info-inner">
                                <span
                                  className="add "
                                  onClick={() => {
                                    addToWishList(element.id);
                                  }}
                                >
                                  {elementId.includes(element.id) ? (
                                    <BsHeart
                                      className="t1"
                                      onClick={() => {
                                        Swal.fire({
                                          icon: "success",
                                          title: "Added successfully to wishList",
                                          showConfirmButton: false,
                                          timer: 1500,
                                        });

                                        handlecolor(element);
                                      }}
                                      style={{ color: "red" }}
                                    />
                                  ) : (
                                    <BsHeart
                                      className="t1"
                                      id={element.id}
                                      onClick={() => {
                                        Swal.fire({
                                          icon: "success",
                                          title: " Added successfully to wishList",
                                          showConfirmButton: false,
                                          timer: 1500,
                                        });
                                        handlecolor(element);
                                      }}
                                    />
                                  )}
                                </span>
                              </div>
                            </div> */}
                          </div>

                          <div className="box-down">
                            <a className="cart h-bg">
                              <span className="price">{"$" + element.price}</span>

                              <span className="p-name padName">
                                <span
                                  className="txt"
                                  onClick={() => {
                                    Swal.fire({
                                      icon: "success",
                                      title: "Added successfully to cart",
                                      showConfirmButton: false,
                                      timer: 1500,
                                    });

                                    addToCart(element.id);
                                  }}
                                >
                                  <BsCartPlus size={29} className="addToIcon" />
                                </span>
                                <span className="add-to-cart">{element.name}</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="pagination">
        {page !== 1 && (
          <>
            <h1
              className="h1Pagination"
              onClick={() => {
                dec();
              }}
            >
              <BsFillArrowLeftCircleFill />
            </h1>
          </>
        )}

        <span className="pageNumber">{page}</span>
        { state?.products?.length ? (
          <h1
            className="h1Pagination"
            onClick={() => {
              inc();
            }}
          >
            <BsFillArrowRightCircleFill />
          </h1>
        ) : (
          <></>
        )}
      </div>

     
    </div>
  );
};

export default Home;
