import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faEnvelope, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import ExternalLink from '../components/ExternalLink'
import FeaturedDatasets from '../components/FeaturedDatasets'
import BlogCard from '../components/BlogCard'

// the first argument in track() becomes the google analytics 'Action' property after passing through segment
// all events are of Action 'Homepage'
const fireEvent = (category, label) => {
  console.log('!', category, label)
  window.analytics.track('Homepage', {
    category,
    label
  })
}

const IndexPage = () => {
  return (
    <div className='index-page'>
      <div className='index-blue'>
        <div className='index-row hero'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-8 col-lg-6'>
                <table className='hero-table'>
                  <tbody>
                    <tr>
                      <td className='highlighted-border-bottom'><span>DATA</span></td>
                      <td><span>WITH</span></td>
                    </tr>
                    <tr>
                      <td className='highlighted'>
                        <span>FRIENDS</span>
                        <div className='plus-horizontal'/>
                        <div className='plus-vertical'/>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p style={{ width: '75%', marginBottom: '1.5rem', backgroundColor: '#FFFFFFDD', border: '0.2rem solid transparent', borderRadius: '0.2rem' }}>Qri helps you clean, version, organize, and share datasets.  Free & Open Source</p>
                <Link to='/download'>
                  <div
                    className='btn btn-lg btn-primary mr-4'
                    style={{ backgroundColor: '#5ED1E6' }}
                    onClick={ () => { fireEvent('button-click', 'download-top') }}
                  >
                    download
                  </div>
                </Link>
                <Link to='/docs'>
                  <div
                    className='btn btn-lg btn-secondary'
                    onClick={ () => { fireEvent('button-click', 'learn-more-top') }}
                  >
                    learn more
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='white-triangle'></div>
      </div>
      <div className='index-blue'>
        <div style={{ padding: '75px 0px 38px 0' }}>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-sm-9 offset-sm-0 col-md-6'>
                <h1 className='col-12 col-md-9 text-center text-md-right m-0 mb-2'>Let’s rethink what datasets can do</h1>
                <p className='col-12 col-md-8 text-center text-md-left offset-md-4'>Qri is an all new suite of tools for doing more with datasets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='index-blue'>
        <div className='index-row' style={{ paddingBottom: '80px' }}>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-sm-6 col-md-4 feature-col'>
                <div className='index-feature-image' style={{
                  backgroundImage: 'url("/img/homepage/feature_01_version.svg")'
                }}>
                </div>
                <h3>Version</h3>
                <p>Compare one version to any other. Understand how datasets evolve with commit histories and diffing tools.</p>
              </div>
              <div className='col-12 col-sm-6 col-md-4 feature-col'>
                <div className='index-feature-image' style={{
                  backgroundImage: 'url("/img/homepage/feature_02_share.svg")'
                }}>
                </div>
                <h3>Share</h3>
                <p>Qri is your personal data portal. Publishing makes your work easy for others to discover and use.</p>
              </div>
              <div className='col-12 col-sm-6 col-md-4 feature-col'>
                <div className='index-feature-image' style={{
                  backgroundImage: 'url("/img/homepage/feature_03_automate.svg")'
                }}>
                </div>
                <h3>Automate</h3>
                <p>Bind code to data with transform scripts, and let your datasets update themselves.</p>
              </div>
              <div className='col-12 col-sm-6 col-md-4 feature-col'>
                <div className='index-feature-image' style={{
                  backgroundImage: 'url("/img/homepage/feature_04_query.svg")'
                }}>
                </div>
                <h3>Query</h3>
                <p>Your entire collection of datasets works like a SQL database.</p>
              </div>
              <div className='col-12 col-sm-6 col-md-4 feature-col'>
                <div className='index-feature-image' style={{
                  backgroundImage: 'url("/img/homepage/feature_05_integrate.svg")'
                }}>
                </div>
                <h3>Integrate</h3>
                <p>Export any version to a format you can use, or wire Qri up to your workflow with command line tools & language integrations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='index-row'>
        <div className='container mb-5'>
          <div className='row mb-4'>
            <div className='col-12 col-md-4 px-md-1'>
              <h2 className='my-2'>Featured Datasets</h2>
            </div>
            <div className='col-12 col-md-8 px-md-1'>
              <form
                method="GET"
                action="https://qri.cloud/search"
                className="input-container"
                onSubmit={ () => fireEvent('search-form-submit', '')}
              >
                <input type="text" className="text-input index-shadow" name="q" placeholder="Search for datasets" />
                <FontAwesomeIcon icon={faSearch} />
                <input type="submit" style={{ display: 'none' }} />
              </form>
            </div>
          </div>
          <FeaturedDatasets />
        </div>
        <div className='container'>
          <div className='col-9 offset-2 col-sm-12 offset-sm-0'>
            <div
              className='text-center more-link'
              onClick={ () => { fireEvent('more-link-click', 'cloud') }}
            >
              <ExternalLink to='https://qri.cloud'>explore more datasets on qri.cloud &nbsp;<FontAwesomeIcon icon={faChevronRight} /></ExternalLink>
            </div>
          </div>
        </div>
      </div>

      <div className='index-row spotlight' style={{ position: 'relative', paddingBottom: '160px' }}>
        <div className='blob-diff-container' />
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <img src="/img/homepage/desktop_screenshot.png" className="img-fluid" />
            </div>
            <div className='col-12 col-md-6'>
              <h2 className='mt-0 mb-4'>Build & Manage Datasets<br/> With Qri Desktop</h2>
              <div className='mb-4'>
              Discover and clone others’ data;<br/>
              Author commits & track versions of your own.
              </div>
              <Link to='/download'>
                <div
                  className='btn btn-lg btn-primary mr-4'
                  onClick={ () => { fireEvent('button-click', 'download-bottom') }}
                >
                  download
                </div>
              </Link>
              <Link to='/docs'>
                <div
                  className='btn btn-lg btn-secondary'
                  onClick={ () => { fireEvent('button-click', 'learn-more-bottom') }}
                >
                  learn more
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='index-row spotlight' style={{ paddingBottom: '140px' }}>
        <div className='container' style={{ position: 'relative' }}>
          <div className='row'>
            <div className='col-12 col-md-6 offset-md-2' style={{ zIndex: 5 }}>
              <h2 className='mt-0 mb-4'>Integrate Anywhere with Qri CLI</h2>
              <div className='mb-3'>
              Full programmatic access to qri tools to customize & integrate with your workflow.<br/>
              Get started now with:
              </div>
              <div className='inline-code-highlight'>
              curl -fsSL https://qri.io/install.sh | sh
              </div>
            </div>
            <div className='col-12 col-md-4 p-0' style={{ zIndex: 5 }}>
              <img src="/img/homepage/cli_screenshot.png" className="img-fluid" />
            </div>
          </div>
          <div className='blob-trees-container' />
        </div>
      </div>

      <div className='index-row spotlight' style={{ paddingBottom: 0 }}>
        <div className='container mb-5'>
          <div className='row'>
            <div className='col-12'>
              <h1 className='mt-0 mb-1'>Data Tells a Story</h1>
              <div className='mb-4'>
              Select data-driven publications from the Qri Blog
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <BlogCard
                title="Policing in the Pandemic"
                link='https://medium.com/qri-io/policing-in-the-pandemic-45448687714b'
                image='https://miro.medium.com/fit/t/1600/480/1*ubE7BXWQmWXCyn4yzlhvLw.png'
                by='Xristos Katsaros'
                date='2020-06-08'
                onClick={ () => { fireEvent('blog-card-click', 'policing-pandemic') }}
              />
            </div>
            <div className='col-12 col-md-4'>
              <BlogCard
                title="Four Simple Steps to Improve U.S. Census Data CSVs"
                link='https://medium.com/qri-io/four-simple-steps-to-improve-u-s-census-data-csvs-b7358ee1b18'
                image='https://miro.medium.com/fit/t/2400/720/1*4fxONIjv9fV64KgMV0dZDw.png'
                by='Chris Whong'
                date='2020-06-12'
                onClick={ () => { fireEvent('blog-card-click', 'improve-census-data') }}
              />
            </div>
            <div className='col-12 col-md-4'>
              <BlogCard
                title="Taming the MTA’s Unruly Turnstile Data"
                link='https://medium.com/qri-io/taming-the-mtas-unruly-turnstile-data-c945f5f96ba0'
                image='https://miro.medium.com/max/1400/1*xrm0PedCpul1HpNqNMwcZw.png'
                by='Chris Whong'
                date='2020-03-31'
                onClick={ () => { fireEvent('blog-card-click', 'mta-turnstile-data') }}
              />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='col-9 offset-2 col-sm-12 offset-sm-0'>
            <div
              className='text-center more-link'
              onClick={ () => { fireEvent('more-link-click', 'blog') }}
            >
              <ExternalLink to='https://medium.com/qri-io'>read more stories on the qri blog &nbsp;<FontAwesomeIcon icon={faChevronRight} /></ExternalLink>
            </div>
          </div>
        </div>
      </div>

      <div className='index-row spotlight'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-8'>
              <h2>Sign up for the Qri Newsletter</h2>
              <form
                className='form-inline newsletter-form input-container'
                action='https://qri.us19.list-manage.com/subscribe/post?u=54a6a8c1171101850b8576277&amp;id=b41eb6f58e'
                method='post'
                id='mc-embedded-subscribe-form'
                name='mc-embedded-subscribe-form'
                target='_blank'
                noValidate
                onSubmit={ () => fireEvent('newsletter-form-submit', '')}
              >
                <div className='form-group mr-sm-3 mb-2'>
                  <input type='email' name='EMAIL' className='text-input index-shadow' placeholder='Your Email' id='mce-EMAIL' />
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <button type='submit' value='Subscribe' name='subscribe' id='mc-embedded-subscribe' className='btn btn-primary btn-lg mb-2' style={{ height: '57px' }}>Subscribe</button>

                <div style={{
                  position: 'absolute',
                  left: '-5000px'
                }} aria-hidden='true'>
                  <input type='text' name='b_54a6a8c1171101850b8576277_b41eb6f58e' tabIndex='-1' />
                </div>
                <div id='mce-responses' className='clear'>
                  <div className='response' id='mce-error-response' style={{ display: 'none' }}></div>
                  <div className='response' id='mce-success-response' style={{ display: 'none' }}></div>
                </div>
              </form>
              <div>Receive updates on our progress and product releases</div>
            </div>
            <div className='col-12 col-md-4 my-4 my-md-0 text-center'>
              <h2 style={{
                fontFamily: 'Rubik',
                fontWeight: 700
              }}>QRI ♥️ FOSS</h2>
              <div className='mb-4'>This Data Party is Open Source</div>
              <ExternalLink to='https://github.com/qri-io'>
                <FontAwesomeIcon icon={faGithub} />
                <span onClick={ () => { fireEvent('social-link-click', 'github') }}>
                  github.com/qri-io
                </span>
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
