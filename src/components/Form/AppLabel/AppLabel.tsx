type AppLabelProps = {
   label: string,
   isRequire: boolean
}
function AppLabel({ label, isRequire }: AppLabelProps) {
    return (
        <label className="mb-2 text-sm font-medium flex gap-1">
            {label}
            {isRequire && <span className='text-red-400'>*</span>}
        </label>
    )
}

export default AppLabel
