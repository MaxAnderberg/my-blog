import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
  class="mb-5 bg-purple-500"
  >
    <div
      class="py-2 px-2 m-auto max-w-4xl	"
    >
      <h1 class="m-0">
        <Link
          to="/"
          class="text-black"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
