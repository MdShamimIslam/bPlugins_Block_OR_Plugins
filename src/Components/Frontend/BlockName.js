

const BlockName = ({ attributes }) => {
	const { purposeType, isShowButton } = attributes;

	return <div className='bBlocksTestPurpose'>

		{
			purposeType === "test" ?
				<>
					<p>
						Every text is written for a reason. For example, every text message you send has a purpose, whether that is to let your mum know when you will be home.
					</p>
					{
						isShowButton ? <button className='startedBtn'>Get Started</button> : ''
					}
				</>
				:

				<>
					<p>
						If someone sends you an invitation to a party, for example, they are telling you what time to arrive and what the sender is celebrating, and they might even.
					</p>
					{
						isShowButton ? <button className='startedBtn'>Get Started</button> : ''
					}
				</>
		}

	</div>
}
export default BlockName;