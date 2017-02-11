import MainMenu from './ui/MainMenu'

export const Right = ({ children }) =>
	<div className="page">
		<MainMenu />
		{children}
	</div>

export const Left = ({ children }) =>
	<div className="page">
		{children}
		<MainMenu />
	</div>

export const Whoops404 = ({ location }) =>
    <div>
        <h1>Whoops, resource not found</h1>
        <p>Could not find {location.pathname}</p>
    </div>
