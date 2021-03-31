import React, { Component } from 'react'
import { connect }  from 'react-redux'
import { loadProperties, filterProperties } from "../../redux/actions";
import listingsData from '../../assets/data/listingsData.js'
class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      properties: [],
      search: '',
      city: 'All',
      houseType: 'All',
      bedrooms: 0,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      swimming_pool: false,
      finished_basement: false,
      gym: false,
      isForSale: false,
      isForRent: false,
      wasSold: false,
      listingType: 'all',
      homeType: '',
      isHouse: false,
      isApartment: false,
      isTownHouse: false,
      isLot: false,
    }
  }

  componentWillMount () {
    this.props.loadProperties(listingsData)
    this.setState({properties: this.props.properties})
  }
  
  menuItemClicked (divId) {
    const listingsMenuPane = document.querySelector('.listings-menu-pane')
    const pricingPane = document.querySelector('.pricing-pane')
    const bedsPane = document.querySelector('.beds-pane')
    const houseTypePane = document.querySelector('.housetype-pane')
    const moreMenuPane = document.querySelector('.more-pane')

    if (divId === 'listings-menu-label') {
      listingsMenuPane.classList.toggle('isActive')
   
      bedsPane.classList.remove('isActive')
      houseTypePane.classList.remove('isActive')
      

    } else if (divId === 'price-menu-label') {
      pricingPane.classList.toggle('isActive')
      listingsMenuPane.classList.remove('isActive')
      bedsPane.classList.remove('isActive')
      houseTypePane.classList.remove('isActive')
      

    } else if (divId === 'beds-menu-label') {
      bedsPane.classList.toggle('isActive')
   
      listingsMenuPane.classList.remove('isActive')
      houseTypePane.classList.remove('isActive')
      

    } else if (divId === 'housetype-menu-label') {
      houseTypePane.classList.toggle('isActive')
   
      listingsMenuPane.classList.remove('isActive')
      bedsPane.classList.remove('isActive')
      

    } else if (divId === 'more-menu-label') {
      moreMenuPane.classList.toggle('isActive')
      houseTypePane.classList.remove('isActive')
   
      listingsMenuPane.classList.remove('isActive')
      bedsPane.classList.remove('isActive')
      
    }

  }

  handleInputChange(event, allProperties, listingType, numOfBeds, homeType) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
   
    console.log("event name: ",name);
    console.log("event value: ",value);
    console.log("listing type",listingType);

    if (numOfBeds >= 0)
      this.setState({bedrooms: numOfBeds})

      if (this.state.homeType )
      this.setState({bedrooms: numOfBeds})

    this.setState({
      [name]: value,
      listingType,
      homeType
    }, () => {
      const filterCriteria = this.state
      this.props.filterProperties(allProperties, filterCriteria)
    });


    

  }

  priceChange(event, allProperties, listingType) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    
    });

  }


  render () {
    const {allProperties} = this.props.properties
    return (
      <div id='search-bar-container' className=''>
        <ul className='toolbar-left'>
          <li id='search-sort-bar' className='zsg-nav-item'>
            <div id='search-filters' className='zsg-nav-item search-filters'>
              <form id='searchfilters' className='zsg-form'>
                <fieldset className='filter-menu listings-menu'>
                  <legend>
                    <a href="#/" className='menu-label' tabIndex='0'>
                      <div id='listings-menu-label' onClick={() => this.menuItemClicked('listings-menu-label')}>
                        <span className='zsg-icon-for-sale'>&nbsp;</span>
                        <span className='zsg-icon-pre-market'>&nbsp;</span>Listing Type
                        <i className='fas fa-sort-down' />
                        <i className='fas fa-sort-up' />
                      </div>
                    </a>
                  </legend>

                  <div className='filter-pane listings-menu-pane'>
                    <div id='category-entries' className='search-entry'>
                      <ul className='home-icons'>
                        <form>
                          <li id='fs-listings' className='listing-type'>
                            <div className='listing-category'>
                              <input 
                              id='fs-listings-input'  
                              className='checkbox' 
                              name='listingType' 
                              type='radio' 
                              
                              onClick={(event) => this.handleInputChange(event, allProperties, 'isForSale')}/>
                              <label htmlFor='fs-listings-input'>
                                <span className='icon-for-sale'>&nbsp;</span><span className='listing-type-text'>For Sale </span>
                                <span id='fs-listings-resultCountWrapper'>(44)</span>
                              </label>
                            </div>
                          </li>
                          <li id='fr-listings' className='listing-type'>
                            <div className='listing-category'>
                              <input 
                              id='fr-listings-input' 
                              type='radio' 
                              className='checkbox' 
                              name='listingType' 
                              
                              onClick={(event) => this.handleInputChange(event, allProperties, 'isForRent')}
                              />
                              <label htmlFor='fr-listings-input'>
                                <span className='icon-for-rent'>&nbsp;</span><span className='listing-type-text' >For Rent </span>
                                <span id='fr-listings-resultCountWrapper'>(11)</span>
                              </label>
                            </div>
                          </li>
                          <li id='rs-listings' className='listing-type'>
                            <div className='listing-category'>
                              <input 
                              id='rs-listings-input' 
                              className='checkbox' 
                              name='listingType' 
                              type='radio' 
                              
                              onClick={(event) => this.handleInputChange(event, allProperties, 'wasSold')}
                              />
                              <label htmlFor='rs-listings-input'>
                                <span className='icon-recently-sold'>&nbsp;</span>
                                <span className='listing-type-text'>Recently Sold </span>
                                <span id='rs-listings-resultCountWrapper'>(288)</span>
                              </label>
                            </div>
                          </li>
                          <li id='rs-listings' className='listing-type'>
                            <div className='listing-category'>
                              <input 
                              id='rs-listings-input' 
                              className='checkbox' 
                              name='listingType' 
                              type='radio' 
                              
                              onClick={(event) => this.handleInputChange(event, allProperties, 'all')}
                              />
                              <label htmlFor='rs-listings-input'>
                                <span className='icon-recently-sold'>&nbsp;</span>
                                <span className='listing-type-text'>All Listings</span>
                                <span id='rs-listings-resultCountWrapper'>(288)</span>
                              </label>
                            </div>
                          </li>
                        </form>
                      </ul>
                    </div>
                  </div>

                </fieldset>
                              <fieldset data-dropdown-id='beds-select' className='filter-menu beds-menu custom-dropdown' id=''>
                  <legend data-za-label='Beds'>
                    <a href="#/"  id='' className='menu-label' tabIndex='0'>
                      <div id='beds-menu-label' onClick={() => this.menuItemClicked('beds-menu-label')}>
                        <span className='options-display' data-za-action='Beds'>0+</span> Beds
                        <i className='fas fa-sort-down' />
                        <i className='fas fa-sort-up' />
                      </div>
                    </a>
                  </legend>

                  <div className='filter-pane beds-pane' >
                    <div id='beds-entries' className='search-entry'>
                      <ul id='bed-options' className='bed-options dropdown-options menu-linklist'>
                        <li onClick={ (event) => this.handleInputChange(event,allProperties, null, 0) } data-value='0,' id='' className='' ><a href="#/"  className='option' tabIndex='0'>0+</a></li>
                        <li data-value='1,' id='' className='' onClick={ (event) => this.handleInputChange(event,allProperties, null, 1) } ><a href="#/"  className='option' tabIndex='0'>1+</a></li>
                        <li data-value='2,' id='' className='' onClick={ (event) => this.handleInputChange(event,allProperties, null, 2) }><a href="#/"  className='option' tabIndex='0'>2+</a></li>
                        <li data-value='3,' id='' className='' onClick={ (event) => this.handleInputChange(event,allProperties, null, 3) }><a href="#/"  className='option' tabIndex='0'>3+</a></li>
                        <li data-value='4,' id='' className='' onClick={ (event) => this.handleInputChange(event,allProperties, null, 4) }><a href="#/"  className='option' tabIndex='0'>4+</a></li>
                        <li data-value='5,' id='' className='' onClick={ (event) => this.handleInputChange(event,allProperties, null, 5) }><a href="#/"  className='option' tabIndex='0'>5+</a></li>
                        <li data-value='6,' id='' className='' onClick={ (event) => this.handleInputChange(event,allProperties, null, 6) }><a href="#/"  className='option' tabIndex='0'>6+</a></li>
                      </ul>
                      <select id='beds-select' className='hide'>
                        <option value='0,'>0+</option>
                        <option value='1,'>1+</option>
                        <option value='2,'>2+</option>
                        <option value='3,'>3+</option>
                        <option value='4,'>4+</option>
                        <option value='5,'>5+</option>
                        <option value='6,'>6+</option>
                      </select>
                    </div>
                  </div>

                </fieldset>
                <fieldset className='filter-menu home-type-menu hometype-standalone custom-dropdown home-type-dropdown'>
                  <legend data-za-label='Home Type'>
                    <a href="#/"  id='' className='menu-label' tabIndex='0'>
                      <div id='housetype-menu-label' onClick={() => this.menuItemClicked('housetype-menu-label')}> Home Type <span id='hometype-count' />
                        <i className='fas fa-sort-down' />
                        <i className='fas fa-sort-up' />
                      </div>
                    </a>
                  </legend>

                  <div className='filter-pane housetype-pane' id=''>
                    <ul className='combobox-options multicheck-dropdown-options hometype-options' id=''>
                      <li id='hometype-houses-filters' className='hometype-houses selected'>
                        <input name='houseType' tabIndex='-1' id='hometype-houses-filters-input'
                          type='radio' className='hometype-houses-input checkbox' data-za-label='SFH' 
                          onClick={ (event) => this.handleInputChange(event,allProperties, null, null, 'house') } 
                          />
                        <label htmlFor='hometype-houses-filters-input'>
                          <span id='hometype-houses-filters-label'
                            className='hometype-houses-label option'>Houses</span>
                        </label>
                      </li>
                      <li id='hometype-apart-filters' className='hometype-apart selected'>
                        <input name='houseType' tabIndex='-1' id='hometype-apart-filters-input'
                          type='radio' className='hometype-apart-input checkbox' data-za-label='MFH' 
                          onClick={ (event) => this.handleInputChange(event,allProperties, null, null, 'apartment') }
                          />
                        <label htmlFor='hometype-apart-filters-input'><span id='hometype-apart-filters-label'
                          className='hometype-apart-label option'>Apartments</span>
                        </label>
                      </li>
                      <li id='hometype-condo-filters' className='hometype-condo selected'>
                        <input name='houseType' tabIndex='-1' id='hometype-condo-filters-input'
                          type='radio' className='hometype-condo-input checkbox' data-za-label='Condo' 
                          onClick={ (event) => this.handleInputChange(event,allProperties, null, null, 'condo') }
                          />
                        <label htmlFor='hometype-condo-filters-input'>
                          <span id='hometype-condo-filters-label'
                            className='hometype-condo-label option'>Condos/co-ops</span>
                        </label>
                      </li>
                      <li id='hometype-townhome-filters' className='hometype-townhome selected'>
                        <input name='houseType' tabIndex='-1' id='hometype-townhome-filters-input'
                          type='radio' className='hometype-townhome-input checkbox' data-za-label='Townhomes' 
                          onClick={ (event) => this.handleInputChange(event,allProperties, null, null, 'townhome') }
                          />
                        <label htmlFor='hometype-townhome-filters-input'>
                          <span id='hometype-townhome-filters-label'
                            className='hometype-townhome-label option'>Townhomes</span>
                        </label>
                      </li>
                      <li id='hometype-land-filters' className='hometype-land selected'>
                        <input name='houseType' tabIndex='-1' id='hometype-land-filters-input' type='radio' className='hometype-land-input checkbox' data-za-label='Lot' 
                        onClick={ (event) => this.handleInputChange(event,allProperties, null, null, 'lot') }
                        />
                        <label htmlFor='hometype-land-filters-input'>
                          <span id='hometype-land-filters-label'
                            className='hometype-land-label option'>Lots/Land</span>
                        </label>
                      </li>
                    </ul>
                  </div>

                </fieldset>
              </form>
            </div>
          </li>
        </ul>
       
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  properties: state.properties,
})


export default connect(mapStateToProps,{ loadProperties, filterProperties })(SearchBar);