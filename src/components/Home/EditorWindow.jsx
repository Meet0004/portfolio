const EditorWindow = () => {
	return (
		<div className="hero-work">
			<div className="hero-model-stage">
				<span className="hero-model-label">3D SHOWCASE</span>
				<div
					className="hero-model-scene"
					role="img"
					aria-label="A temporary 3D building preview. Replace it with a personal 3D model when available."
				>
					<div className="hero-model-orbit hero-model-orbit-one" />
					<div className="hero-model-orbit hero-model-orbit-two" />
					<div className="hero-model-building" aria-hidden="true">
						<div className="hero-building-roof" />
						<div className="hero-building-front">
							<span /><span /><span /><span />
							<i />
						</div>
						<div className="hero-building-side">
							<span /><span />
						</div>
					</div>
					<div className="hero-model-platform" />
					<span className="hero-model-spark hero-model-spark-one" />
					<span className="hero-model-spark hero-model-spark-two" />
				</div>
				<div className="hero-model-caption">
					<div>
						<span>PERSONAL 3D SPACE</span>
						<strong>Model in progress</strong>
					</div>
					<span className="hero-model-status"><i /> IN THE WORKS</span>
				</div>
			</div>
		</div>
	);
};

export default EditorWindow;
