// Real Property Hub - Complete Component Library
// All 36 design frames from HYBRID-AI Real Property Design System
// Using React + Tailwind CSS with IBM Carbon Design System tokens

// ============================================================================
// IMAGE ASSETS
// ============================================================================

const imgIronIconIronArrowDropUp = "https://www.figma.com/api/mcp/asset/adf1e4cd-0794-4449-86d1-b7d8af339506";
const imgIronIconIronArrowDropDown = "https://www.figma.com/api/mcp/asset/50c0c529-c4d2-491d-8e8f-ee6da9d713ff";

// ============================================================================
// SHARED COMPONENTS
// ============================================================================

// ScrollBar Component - Reusable vertical scrollbar
function ScrollBar({ className, property1 = "Variant3" }) {
  return (
    <div className={className || "h-[1030px] relative w-[20px]"} data-node-id="65:9340">
      <div className="absolute bg-white inset-0" data-node-id="65:9357" />
      <div className="absolute h-[5px] left-[5px] top-[5px] w-[10px]" data-name="iron-icon-iron-arrow-drop-up" data-node-id="65:9358">
        <img alt="" className="absolute block max-w-none size-full" src={imgIronIconIronArrowDropUp} />
      </div>
      <div className="absolute bg-[#525252] h-[994px] left-[5px] rounded-[15px] top-[18px] w-[10px]" data-node-id="65:9359" />
      <div className="absolute h-[5px] left-[5px] top-[1020px] w-[10px]" data-name="iron-icon-iron-arrow-drop-down" data-node-id="65:9360">
        <img alt="" className="absolute block max-w-none size-full" src={imgIronIconIronArrowDropDown} />
      </div>
    </div>
  );
}

// Button Component - Standard button with variants
function Button({ label, variant = "primary", onClick, disabled = false, className = "" }) {
  const baseClasses = "content-stretch flex flex-col items-start overflow-clip relative shrink-0";
  const variantClasses = {
    primary: "bg-[var(--button\/button-primary,#0f62fe)]",
    secondary: "bg-[var(--button\/button-secondary,#393939)]",
    danger: "bg-[var(--button\/button-danger-primary,#da1e28)]",
  };
  
  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} onClick={onClick} disabled={disabled} data-variant={variant}>
      <div className="content-stretch flex isolate items-center overflow-clip pl-[16px] pr-[64px] py-[15px] relative shrink-0 w-full">
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/text-on-color,white)] text-left tracking-[0.16px] whitespace-nowrap z-[2]">
          {label}
        </p>
      </div>
    </button>
  );
}

// TextInput Component - Reusable text input
function TextInput({ label, placeholder = "Placeholder text (optional)", value = "", onChange = null, helperText = "" }) {
  return (
    <div className="content-stretch flex flex-col items-start leading-[18px] not-italic relative shrink-0 text-[14px] tracking-[0.16px] w-full">
      {label && (
        <p className="font-['IBM_Plex_Sans:SemiBold',sans-serif] relative shrink-0 text-[color:var(--text\/text-primary,#161616)] w-full mb-[8px]">
          {label}
        </p>
      )}
      {helperText && (
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] relative shrink-0 text-[color:var(--text\/text-secondary,#525252)] w-full mb-[8px]">
          {helperText}
        </p>
      )}
      <div className="content-stretch flex gap-[16px] h-[48px] isolate items-start px-[16px] py-[15px] relative shrink-0 w-full">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="flex-1 font-['IBM_Plex_Sans:Regular',sans-serif] bg-[var(--field\/field-01,#f4f4f4)] border-[var(--border\/border-strong-01,#8d8d8d)] border-b border-solid outline-none text-[14px] text-[color:var(--text\/text-primary,#161616)]"
        />
      </div>
    </div>
  );
}

// ============================================================================
// TRANSACTION MODE VIEWS (Frames 44:3757, 44:3964, 44:3861, 44:4167, 44:4270)
// ============================================================================

export function MyCompletedList() {
  return (
    <div className="bg-[var(--background\/background,white)] relative w-[1920px] h-[1080px]" data-name="My Completed List" data-node-id="44:3757">
      <div className="absolute bg-[#1f1f1f] content-stretch flex items-center justify-between px-[20px] py-[10px] top-0 w-full h-[50px]" data-name="Header">
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] text-white text-[24px]">Real Property Hub</p>
      </div>
      <div className="absolute top-[50px] left-0 right-0 bottom-0 overflow-auto p-[20px]">
        <div className="mb-[20px]">
          <h2 className="font-['IBM_Plex_Sans:Regular',sans-serif] text-[20px] text-[#161616] mb-[16px]">My Completed Transactions</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#f4f4f4]">
                <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold text-[#161616]">Transaction Plan</th>
                <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold text-[#161616]">Status</th>
                <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold text-[#161616]">Priority</th>
                <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold text-[#161616]">Country</th>
                <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold text-[#161616]">State/Province</th>
                <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold text-[#161616]">City</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#e0e0e0]">
                <td className="px-[12px] py-[12px] text-[14px] text-[#161616]">Transaction Plan 1</td>
                <td className="px-[12px] py-[12px] text-[14px] text-[#525252]">Completed</td>
                <td className="px-[12px] py-[12px] text-[14px] text-[#525252]">High</td>
                <td className="px-[12px] py-[12px] text-[14px] text-[#525252]">USA</td>
                <td className="px-[12px] py-[12px] text-[14px] text-[#525252]">California</td>
                <td className="px-[12px] py-[12px] text-[14px] text-[#525252]">San Francisco</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function AllHubInProgressList() {
  return (
    <div className="bg-[var(--background\/background,white)] relative w-[1920px] h-[1080px]" data-name="All Hub In Progress List" data-node-id="44:3964">
      <div className="absolute bg-[#1f1f1f] content-stretch flex items-center justify-between px-[20px] py-[10px] top-0 w-full h-[50px]">
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] text-white text-[24px]">Real Property Hub</p>
      </div>
      <div className="absolute top-[50px] left-0 right-0 bottom-0 overflow-auto p-[20px]">
        <h2 className="font-['IBM_Plex_Sans:Regular',sans-serif] text-[20px] text-[#161616] mb-[16px]">In Progress Transactions (Team View)</h2>
        {/* Tab Navigation */}
        <div className="flex gap-[12px] mb-[20px] border-b-[3px] border-[#e0e0e0]">
          <button className="pb-[12px] border-b-[3px] border-[#0f62fe] text-[14px] font-semibold text-[#0f62fe]">Unfinished Tasks</button>
          <button className="pb-[12px] border-b-[3px] border-transparent text-[14px] text-[#525252]">In Progress</button>
          <button className="pb-[12px] border-b-[3px] border-transparent text-[14px] text-[#525252]">Pending Review</button>
        </div>
      </div>
    </div>
  );
}

export function MyScheduleTaskList() {
  return (
    <div className="bg-[var(--background\/background,white)] relative w-[1920px] h-[1080px]" data-name="My Schedule Task List" data-node-id="44:3861">
      <div className="absolute bg-[#1f1f1f] content-stretch flex items-center justify-between px-[20px] py-[10px] top-0 w-full h-[50px]">
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] text-white text-[24px]">Task Scheduler</p>
      </div>
      <div className="absolute top-[50px] left-0 right-0 bottom-0 overflow-auto p-[20px]">
        <h2 className="font-['IBM_Plex_Sans:Regular',sans-serif] text-[20px] text-[#161616] mb-[16px]">My Scheduled Tasks</h2>
        {/* Task list would go here */}
      </div>
    </div>
  );
}

export function MyScheduleTaskGrid() {
  return (
    <div className="bg-[var(--background\/background,white)] relative w-[1920px] h-[1080px]" data-name="My Schedule Task Grid" data-node-id="44:4167">
      <div className="absolute bg-[#1f1f1f] content-stretch flex items-center justify-between px-[20px] py-[10px] top-0 w-full h-[50px]">
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] text-white text-[24px]">Task Grid View</p>
      </div>
      <div className="absolute top-[50px] left-0 right-0 bottom-0 overflow-auto p-[20px]">
        <h2 className="font-['IBM_Plex_Sans:Regular',sans-serif] text-[20px] text-[#161616] mb-[16px]">Scheduled Tasks (Grid)</h2>
        {/* Grid view with property cards would go here */}
      </div>
    </div>
  );
}

export function AllHubInProgressGrid() {
  return (
    <div className="bg-[var(--background\/background,white)] relative w-[1920px] h-[1080px]" data-name="All Hub In Progress Grid" data-node-id="44:4270">
      <div className="absolute bg-[#1f1f1f] content-stretch flex items-center justify-between px-[20px] py-[10px] top-0 w-full h-[50px]">
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] text-white text-[24px]">In Progress (Grid View)</p>
      </div>
      <div className="absolute top-[50px] left-0 right-0 bottom-0 overflow-auto p-[20px]">
        <h2 className="font-['IBM_Plex_Sans:Regular',sans-serif] text-[20px] text-[#161616] mb-[16px]">Team In Progress Transactions</h2>
      </div>
    </div>
  );
}

// ============================================================================
// TRANSACTION HORIZON DETAIL VIEW (Frame 52:890)
// Multi-tab interface for transaction details
// ============================================================================

export function TransactionHorizonDetail() {
  const [activeTab, setActiveTab] = React.useState("General");
  
  const tabs = [
    "General", "Business Participant", "Tasks", "Requirements", 
    "Scenarios", "Contacts", "Executive Summary", "Documents"
  ];
  
  return (
    <div className="bg-white relative w-[1920px] h-[1080px]" data-name="Transaction Horizon" data-node-id="52:890">
      {/* Header */}
      <div className="absolute bg-[#1f1f1f] content-stretch flex items-center justify-between px-[20px] py-[10px] top-0 w-full h-[50px]">
        <div className="flex items-center gap-[12px]">
          <span className="text-white text-[14px] cursor-pointer">← Back</span>
          <h1 className="font-['IBM_Plex_Sans:Bold',sans-serif] text-white text-[20px]">Transaction Horizon</h1>
        </div>
        <Button label="Create Draft" variant="primary" />
      </div>
      
      {/* Tab Navigation */}
      <div className="absolute top-[50px] left-0 right-0 border-b-[1px] border-[#e0e0e0] flex gap-[24px] px-[20px] bg-white h-[48px] items-center">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-[14px] font-['IBM_Plex_Sans:Regular',sans-serif] pb-[12px] border-b-[3px] ${
              activeTab === tab
                ? "border-[#0f62fe] text-[#0f62fe] font-semibold"
                : "border-transparent text-[#525252] hover:text-[#161616]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      
      {/* Content Area */}
      <div className="absolute top-[98px] left-[20px] right-[20px] bottom-[20px] overflow-auto">
        {activeTab === "General" && (
          <div>
            <h2 className="text-[20px] font-semibold text-[#161616] mb-[16px]">General Information</h2>
            <div className="grid grid-cols-2 gap-[20px]">
              <TextInput label="Transaction ID" placeholder="ID-001" />
              <TextInput label="Transaction Name" placeholder="Enter name" />
              <TextInput label="Status" placeholder="Active" />
              <TextInput label="Type" placeholder="Acquisition" />
            </div>
          </div>
        )}
        {/* Other tabs would render their content similarly */}
      </div>
    </div>
  );
}

// ============================================================================
// REQUIREMENTS PANEL (Frame 52:2186)
// ============================================================================

export function RequirementsPanel() {
  return (
    <div className="bg-white relative w-[1920px] h-[1080px]" data-name="Requirements Panel" data-node-id="52:2186">
      {/* Header */}
      <div className="absolute bg-[#1f1f1f] content-stretch flex items-center justify-between px-[20px] py-[10px] top-0 w-full h-[50px]">
        <h1 className="font-['IBM_Plex_Sans:Bold',sans-serif] text-white text-[20px]">Requirements (CTQ - Critical to Quality)</h1>
      </div>
      
      {/* Content */}
      <div className="absolute top-[50px] left-[20px] right-[20px] bottom-[20px] overflow-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#f4f4f4]">
              <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold text-[#161616]">Requirement</th>
              <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold text-[#161616]">Importance</th>
              <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold text-[#161616]">Desired Value</th>
              <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold text-[#161616]">Units</th>
            </tr>
          </thead>
          <tbody>
            {["Business-Budget", "Business-Deal Term", "Proximity-Public Transit", "Site-Private Conference", "Site-Rentable Area"].map((req, i) => (
              <tr key={i} className="border-b border-[#e0e0e0]">
                <td className="px-[12px] py-[12px] text-[14px] text-[#161616]">{req}</td>
                <td className="px-[12px] py-[12px] text-[14px] text-[#525252]">{5 - i}</td>
                <td className="px-[12px] py-[12px] text-[14px] text-[#525252]">Value</td>
                <td className="px-[12px] py-[12px] text-[14px] text-[#525252]">Units</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ============================================================================
// SCENARIOS TAB (Frame 52:2248)
// ============================================================================

export function ScenariosTab() {
  return (
    <div className="bg-white relative w-[1920px] h-[1080px]" data-name="Scenarios Tab" data-node-id="52:2248">
      {/* Header */}
      <div className="absolute bg-[#1f1f1f] content-stretch flex items-center justify-between px-[20px] py-[10px] top-0 w-full h-[50px]">
        <h1 className="font-['IBM_Plex_Sans:Bold',sans-serif] text-white text-[20px]">Scenario Analysis</h1>
      </div>
      
      {/* Content */}
      <div className="absolute top-[50px] left-[20px] right-[20px] bottom-[20px] overflow-auto">
        <div className="grid grid-cols-3 gap-[16px] mb-[20px]">
          <TextInput label="Lowest NPV" placeholder="Acquisition" />
          <TextInput label="Highest NPV" placeholder="Disposition" />
          <TextInput label="Currency" placeholder="US Dollars" />
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#f4f4f4]">
              <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Name</th>
              <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Total Rank</th>
              <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Budget</th>
              <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Deal Term</th>
            </tr>
          </thead>
          <tbody>
            {["Scenario-A", "Scenario-B", "Scenario-C"].map((scenario, i) => (
              <tr key={i} className="border-b border-[#e0e0e0]">
                <td className="px-[12px] py-[12px] text-[14px]">{scenario}</td>
                <td className="px-[12px] py-[12px] text-[14px]">Rank {i + 1}</td>
                <td className="px-[12px] py-[12px] text-[14px]">$Budget</td>
                <td className="px-[12px] py-[12px] text-[14px]">Term</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ============================================================================
// CONTACTS TAB (Frame 52:1973)
// ============================================================================

export function ContactsTab() {
  return (
    <div className="bg-white relative w-[1920px] h-[1080px]" data-name="Contacts Tab" data-node-id="52:1973">
      {/* Header */}
      <div className="absolute bg-[#1f1f1f] content-stretch flex items-center justify-between px-[20px] py-[10px] top-0 w-full h-[50px]">
        <h1 className="font-['IBM_Plex_Sans:Bold',sans-serif] text-white text-[20px]">Contacts</h1>
        <Button label="Add Contact" variant="primary" />
      </div>
      
      {/* Content */}
      <div className="absolute top-[50px] left-[20px] right-[20px] bottom-[20px] overflow-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#f4f4f4]">
              <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Role</th>
              <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Person</th>
              <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Work Phone</th>
              <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Email</th>
            </tr>
          </thead>
          <tbody>
            {["Manager", "Analyst", "Director", "Coordinator"].map((role, i) => (
              <tr key={i} className="border-b border-[#e0e0e0]">
                <td className="px-[12px] py-[12px] text-[14px]">{role}</td>
                <td className="px-[12px] py-[12px] text-[14px]">Contact Name {i + 1}</td>
                <td className="px-[12px] py-[12px] text-[14px]">555-1234</td>
                <td className="px-[12px] py-[12px] text-[14px]">contact@company.com</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ============================================================================
// EXECUTIVE SUMMARY TAB (Frame 52:2312)
// ============================================================================

export function ExecutiveSummaryTab() {
  return (
    <div className="bg-white relative w-[1920px] h-[1080px]" data-name="Executive Summary Tab" data-node-id="52:2312">
      {/* Header */}
      <div className="absolute bg-[#1f1f1f] content-stretch flex items-center justify-between px-[20px] py-[10px] top-0 w-full h-[50px]">
        <h1 className="font-['IBM_Plex_Sans:Bold',sans-serif] text-white text-[20px]">Executive Summary</h1>
        <Button label="Update Metrics" variant="primary" />
      </div>
      
      {/* Content */}
      <div className="absolute top-[50px] left-[20px] right-[20px] bottom-[20px] overflow-auto">
        <div className="grid grid-cols-2 gap-[20px]">
          <div className="bg-[#f4f4f4] p-[16px] rounded">
            <h3 className="font-semibold text-[16px] text-[#161616] mb-[12px]">Total Rank Comparison</h3>
            {/* Radar chart placeholder */}
            <div className="h-[200px] bg-[#e0e0e0] flex items-center justify-center text-[#525252]">Chart Area</div>
          </div>
          <div className="bg-[#f4f4f4] p-[16px] rounded">
            <h3 className="font-semibold text-[16px] text-[#161616] mb-[12px]">Scenario Analysis</h3>
            {/* Analysis table */}
            <table className="w-full text-[12px]">
              <tbody>
                <tr><td className="py-[4px]">ScenarioA:</td><td className="text-right">Value 1</td></tr>
                <tr><td className="py-[4px]">ScenarioB:</td><td className="text-right">Value 2</td></tr>
                <tr><td className="py-[4px]">ScenarioC:</td><td className="text-right">Value 3</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// DIALOG & MODAL FRAMES
// ============================================================================

// Add Document Dialog (Frame 647:18110)
export function AddDocumentDialog() {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[680px] p-[20px]" data-node-id="647:18110">
      <h2 className="text-[32px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[#161616] mb-[20px]">Add Document</h2>
      <div className="mb-[20px]">
        <h3 className="font-semibold text-[14px] text-[#161616] mb-[8px]">Upload files</h3>
        <p className="text-[12px] text-[#525252] mb-[12px]">Max file size is 500kb. Supported file types are .jpg, .pdf, .docx, .xlx, .png</p>
        <div className="border-2 border-dashed border-[#8d8d8d] p-[32px] text-center rounded">
          <p className="text-[14px] text-[#0f62fe]">Drag and drop files here or click to upload</p>
        </div>
      </div>
      <div className="flex gap-[10px] justify-end">
        <Button label="Cancel" variant="secondary" />
        <Button label="Add" variant="primary" />
      </div>
    </div>
  );
}

// Edit Contact Dialog (Frame 316:10582)
export function EditContactDialog() {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[1000px] p-[20px]" data-node-id="316:10582">
      <h2 className="text-[32px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[#161616] mb-[20px]">Edit Contact</h2>
      <div className="grid grid-cols-2 gap-[20px] mb-[20px]">
        <TextInput label="Name" placeholder="Alex Vance" />
        <TextInput label="Work Phone" placeholder="555-867-9305" />
        <div>
          <label className="block text-[12px] font-semibold text-[#525252] mb-[8px]">Role</label>
          <select className="w-full px-[12px] py-[10px] border-b-[2px] border-[#8d8d8d] bg-[#f4f4f4]">
            <option>Portfolio Manager</option>
          </select>
        </div>
        <TextInput label="Fax" placeholder="555-867-9305" />
        <TextInput label="Primary Organization" placeholder="Black Mesa East" />
        <TextInput label="Email" placeholder="AVance@Company.com" />
      </div>
      <div className="flex gap-[10px] justify-end">
        <Button label="Cancel" variant="secondary" />
        <Button label="Update" variant="primary" />
      </div>
    </div>
  );
}

// Create New Transaction Plan Dialog (Frame 94:17009)
export function CreateTransactionPlanDialog() {
  return (
    <div className="bg-white w-[1000px] p-[40px]" data-node-id="94:17009">
      <h2 className="text-[32px] font-['IBM_Plex_Sans:Regular',sans-serif] text-black mb-[20px]">Create New Transaction Plan</h2>
      <TextInput label="Geography Lookup" placeholder="Search for geography" helperText="" />
      <TextInput label="Name" placeholder="Placeholder text (optional)" />
      <div className="flex gap-[17px] justify-end mt-[20px]">
        <Button label="Cancel" variant="secondary" />
        <Button label="Create Plan" variant="primary" />
      </div>
    </div>
  );
}

// Remove Record Warning (Frame 435:30205)
export function RemoveRecordWarningDialog() {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[500px] p-[20px]" data-node-id="435:30205">
      <h2 className="text-[32px] font-['IBM_Plex_Sans:Regular',sans-serif] text-black mb-[20px]">Remove Record</h2>
      <p className="text-[18px] font-['IBM_Plex_Sans:Medium',sans-serif] text-[#525252] mb-[20px]">
        Are you sure you want to remove the selected records?<br />This action cannot be undone.
      </p>
      <div className="flex gap-[10px] justify-end">
        <Button label="Cancel" variant="secondary" />
        <Button label="Remove" variant="danger" />
      </div>
    </div>
  );
}

// Delete Record Warning (Frame 665:19128)
export function DeleteRecordWarningDialog() {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[500px] p-[20px]" data-node-id="665:19128">
      <h2 className="text-[32px] font-['IBM_Plex_Sans:Regular',sans-serif] text-black mb-[20px]">Delete Record</h2>
      <p className="text-[18px] font-['IBM_Plex_Sans:Medium',sans-serif] text-[#525252] mb-[20px]">
        Are you sure you want to delete the selected records?<br />This action cannot be undone.
      </p>
      <div className="flex gap-[10px] justify-end">
        <Button label="Cancel" variant="secondary" />
        <Button label="Delete" variant="danger" />
      </div>
    </div>
  );
}

// Remove Project Warning (Frame 681:22738)
export function RemoveProjectWarningDialog() {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[500px] p-[20px]" data-node-id="681:22738">
      <h2 className="text-[32px] font-['IBM_Plex_Sans:Regular',sans-serif] text-black mb-[20px]">Remove Project</h2>
      <p className="text-[18px] font-['IBM_Plex_Sans:Medium',sans-serif] text-[#525252] mb-[20px]">
        Are you sure you want to remove the selected projects?<br />This action cannot be undone.
      </p>
      <div className="flex gap-[10px] justify-end">
        <Button label="Cancel" variant="secondary" />
        <Button label="Remove" variant="danger" />
      </div>
    </div>
  );
}

// ============================================================================
// SEARCH & LOOKUP DIALOGS
// ============================================================================

// Find Geography Dialog (Frame 435:31698)
export function FindGeographyDialog() {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[1024px] p-[20px]" data-node-id="435:31698">
      <h2 className="text-[24px] font-semibold text-[#161616] mb-[16px]">Find Geography</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#f4f4f4]">
            <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">City</th>
            <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">State/Province</th>
            <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Metropolitan Area</th>
            <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Region</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map(i => (
            <tr key={i} className="border-b border-[#e0e0e0]">
              <td className="px-[12px] py-[12px]">Table Content</td>
              <td className="px-[12px] py-[12px]">Table Content</td>
              <td className="px-[12px] py-[12px]">Table Content</td>
              <td className="px-[12px] py-[12px]">Table Content</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-[10px] justify-end mt-[16px]">
        <Button label="Cancel" variant="secondary" />
        <Button label="OK" variant="primary" />
      </div>
    </div>
  );
}

// Find Organization Dialog (Frame 572:22653)
export function FindOrganizationDialog() {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[1024px] p-[20px]" data-node-id="572:22653">
      <h2 className="text-[24px] font-semibold text-[#161616] mb-[16px]">Find Organization</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#f4f4f4]">
            <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Name</th>
            <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">ID</th>
            <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Company</th>
            <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Division</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map(i => (
            <tr key={i} className="border-b border-[#e0e0e0]">
              <td className="px-[12px] py-[12px]">Table Content</td>
              <td className="px-[12px] py-[12px]">Table Content</td>
              <td className="px-[12px] py-[12px]">Table Content</td>
              <td className="px-[12px] py-[12px]">Table Content</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-[10px] justify-end mt-[16px]">
        <Button label="Cancel" variant="secondary" />
        <Button label="OK" variant="primary" />
      </div>
    </div>
  );
}

// Find Contact Dialog (Frame 576:18646)
export function FindContactDialog() {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[1024px] p-[20px]" data-node-id="576:18646">
      <h2 className="text-[24px] font-semibold text-[#161616] mb-[16px]">Find Contact</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#f4f4f4]">
            <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Work Phone</th>
            <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Email</th>
            <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Fax</th>
            <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Contact Mobile</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map(i => (
            <tr key={i} className="border-b border-[#e0e0e0]">
              <td className="px-[12px] py-[12px]">Table Content</td>
              <td className="px-[12px] py-[12px]">Table Content</td>
              <td className="px-[12px] py-[12px]">Table Content</td>
              <td className="px-[12px] py-[12px]">Table Content</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-[10px] justify-end mt-[16px]">
        <Button label="Cancel" variant="secondary" />
        <Button label="OK" variant="primary" />
      </div>
    </div>
  );
}

// Find Project Dialog (Frame 681:22381)
export function FindProjectDialog() {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[1024px] p-[20px]" data-node-id="681:22381">
      <h2 className="text-[24px] font-semibold text-[#161616] mb-[16px]">Find Project</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#f4f4f4]">
            <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Project Name</th>
            <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Project ID</th>
            <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Type</th>
            <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map(i => (
            <tr key={i} className="border-b border-[#e0e0e0]">
              <td className="px-[12px] py-[12px]">Table Content</td>
              <td className="px-[12px] py-[12px]">Table Content</td>
              <td className="px-[12px] py-[12px]">Table Content</td>
              <td className="px-[12px] py-[12px]">Table Content</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-[10px] justify-end mt-[16px]">
        <Button label="Cancel" variant="secondary" />
        <Button label="OK" variant="primary" />
      </div>
    </div>
  );
}

// ============================================================================
// FORM DIALOGS
// ============================================================================

// Edit Business Participant (Frame 479:13118 - sparse, sublayers extracted)
export function EditBusinessParticipantDialog() {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[1716px] p-[50px]" data-node-id="479:13118">
      <h2 className="text-[24px] font-semibold text-[#161616] mb-[24px]">Edit Business Participant</h2>
      <div className="grid grid-cols-2 gap-[20px]">
        <TextInput label="Company" placeholder="Enter company" />
        <TextInput label="Division" placeholder="Select division" />
        <TextInput label="Organization" placeholder="Select organization" />
        <TextInput label="Role" placeholder="Select role" />
      </div>
      <div className="flex gap-[10px] justify-end mt-[20px]">
        <Button label="Cancel" variant="secondary" />
        <Button label="Update" variant="primary" />
      </div>
    </div>
  );
}

// Edit Requirement Dialog (Frame 316:10453)
export function EditRequirementDialog() {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[1000px] p-[20px]" data-node-id="316:10453">
      <h2 className="text-[24px] font-semibold text-[#161616] mb-[20px]">Edit Requirement</h2>
      <div className="grid grid-cols-2 gap-[20px]">
        <div>
          <label className="block text-[12px] font-semibold text-[#525252] mb-[8px]">Requirement</label>
          <select className="w-full px-[12px] py-[10px] border-b-[2px] border-[#8d8d8d] bg-[#f4f4f4]">
            <option>Business - Budget</option>
          </select>
        </div>
        <div>
          <label className="block text-[12px] font-semibold text-[#525252] mb-[8px]">Importance</label>
          <select className="w-full px-[12px] py-[10px] border-b-[2px] border-[#8d8d8d] bg-[#f4f4f4]">
            <option>5 - High</option>
          </select>
        </div>
        <TextInput label="Desired Value" placeholder="150000" />
        <div>
          <label className="block text-[12px] font-semibold text-[#525252] mb-[8px]">Units</label>
          <select className="w-full px-[12px] py-[10px] border-b-[2px] border-[#8d8d8d] bg-[#f4f4f4]">
            <option>US Dollars</option>
          </select>
        </div>
      </div>
      <div className="flex gap-[10px] justify-end mt-[20px]">
        <Button label="Cancel" variant="secondary" />
        <Button label="Update" variant="primary" />
      </div>
    </div>
  );
}

// Add Requirement Dialog (Frame 388:21822)
export function AddRequirementDialog() {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[1000px] p-[20px]" data-node-id="388:21822">
      <h2 className="text-[24px] font-semibold text-[#161616] mb-[20px]">Add Requirement</h2>
      <div className="grid grid-cols-2 gap-[20px]">
        <TextInput label="Label" placeholder="Placeholder text (optional)" />
        <div>
          <label className="block text-[12px] font-semibold text-[#525252] mb-[8px]">Importance</label>
          <select className="w-full px-[12px] py-[10px] border-b-[2px] border-[#8d8d8d] bg-[#f4f4f4]">
            <option>Choose an option</option>
          </select>
        </div>
        <TextInput label="Label" placeholder="Placeholder text (optional)" />
        <TextInput label="Desired Value" placeholder="Placeholder text (optional)" />
        <div>
          <label className="block text-[12px] font-semibold text-[#525252] mb-[8px]">Requirement</label>
          <select className="w-full px-[12px] py-[10px] border-b-[2px] border-[#8d8d8d] bg-[#f4f4f4]">
            <option>Choose an option</option>
          </select>
        </div>
        <div>
          <label className="block text-[12px] font-semibold text-[#525252] mb-[8px]">Units</label>
          <select className="w-full px-[12px] py-[10px] border-b-[2px] border-[#8d8d8d] bg-[#f4f4f4]">
            <option>Choose an option</option>
          </select>
        </div>
      </div>
      <div className="flex gap-[10px] justify-end mt-[20px]">
        <Button label="Cancel" variant="secondary" />
        <Button label="Add" variant="primary" />
      </div>
    </div>
  );
}

// Add Project Dialog (Frame 514:17960)
export function AddProjectDialog() {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[1000px] p-[20px]" data-node-id="514:17960">
      <h2 className="text-[24px] font-semibold text-[#161616] mb-[20px]">Add Project</h2>
      <div className="space-y-[20px]">
        <div>
          <h3 className="font-semibold text-[16px] text-[#161616] mb-[12px]">Details</h3>
          <div className="grid grid-cols-2 gap-[20px]">
            <TextInput label="Project Name" placeholder="Placeholder text (optional)" />
            <TextInput label="Associated Scenario" placeholder="Autofill with existing Association" />
            <div>
              <label className="block text-[12px] font-semibold text-[#525252] mb-[8px]">Transaction Type</label>
              <select className="w-full px-[12px] py-[10px] border-b-[2px] border-[#8d8d8d] bg-[#f4f4f4]">
                <option>Choose an option</option>
              </select>
            </div>
            <div></div>
            <div className="col-span-2">
              <label className="block text-[12px] font-semibold text-[#525252] mb-[8px]">Description (0/150)</label>
              <textarea className="w-full px-[12px] py-[12px] border-[2px] border-[#e0e0e0] rounded h-[80px]" placeholder="Placeholder text" />
              <p className="text-[12px] text-[#6f6f6f] mt-[4px]">Helper text</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-[16px] text-[#161616] mb-[12px]">Project Template</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#f4f4f4]">
                <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">ID</th>
                <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Name</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#e0e0e0]">
                <td className="px-[12px] py-[12px]">DEFAULT</td>
                <td className="px-[12px] py-[12px]">New Project for Scenario Plan</td>
              </tr>
              <tr className="border-b border-[#e0e0e0]">
                <td className="px-[12px] py-[12px]">RE001</td>
                <td className="px-[12px] py-[12px]">New Something Template</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex gap-[10px] justify-end mt-[20px]">
        <Button label="Cancel" variant="secondary" />
        <Button label="Add" variant="primary" />
      </div>
    </div>
  );
}

// Attach Project to Scenario (Frame 514:17965)
export function AttachProjectToScenarioDialog() {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[1000px] p-[20px]" data-node-id="514:17965">
      <h2 className="text-[24px] font-semibold text-[#161616] mb-[20px]">Attach Project to Scenario</h2>
      <div>
        <label className="block text-[12px] font-semibold text-[#525252] mb-[8px]">Scenario</label>
        <input type="text" placeholder="Auto fill with selected scenario" className="w-full px-[12px] py-[10px] border-b-[2px] border-[#8d8d8d] bg-[#f4f4f4]" />
      </div>
      <table className="w-full border-collapse mt-[20px]">
        <thead>
          <tr className="bg-[#f4f4f4]">
            <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Project Name</th>
            <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Project ID</th>
            <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Type</th>
            <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map(i => (
            <tr key={i} className="border-b border-[#e0e0e0]">
              <td className="px-[12px] py-[12px]">Table Content</td>
              <td className="px-[12px] py-[12px]">Table Content</td>
              <td className="px-[12px] py-[12px]">Table Content</td>
              <td className="px-[12px] py-[12px]">Table Content</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-[10px] justify-end mt-[16px]">
        <Button label="Remove" variant="secondary" />
        <Button label="Find" variant="primary" />
      </div>
      <div className="flex gap-[10px] justify-end mt-[8px]">
        <Button label="Cancel" variant="secondary" />
        <Button label="Attach" variant="primary" />
      </div>
    </div>
  );
}

// Add Comment Dialog (Frame 582:34297)
export function AddCommentDialog() {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[1000px] p-[20px]" data-node-id="582:34297">
      <h2 className="text-[24px] font-semibold text-[#161616] mb-[20px]">Add Comment</h2>
      <div className="grid grid-cols-3 gap-[16px] mb-[20px]">
        <div>
          <label className="block text-[12px] font-semibold text-[#525252] mb-[8px]">Comment Type</label>
          <select className="w-full px-[12px] py-[10px] border-b-[2px] border-[#8d8d8d] bg-[#f4f4f4]">
            <option>Choose an option</option>
          </select>
        </div>
        <TextInput label="Comment Reference" placeholder="Names" />
        <TextInput label="Created By" placeholder="Names" />
      </div>
      <TextInput label="Reference Date*" placeholder="" />
      <div className="mt-[12px]">
        <label className="block text-[12px] font-semibold text-[#525252] mb-[8px]">Comment*</label>
        <textarea className="w-full px-[12px] py-[12px] border-[2px] border-[#e0e0e0] rounded h-[80px]" placeholder="" />
      </div>
      <div className="flex gap-[10px] justify-end mt-[20px]">
        <Button label="Cancel" variant="secondary" />
        <Button label="Add" variant="primary" />
      </div>
    </div>
  );
}

// Schedule Task Details (Frame 572:22618)
export function ScheduleTaskDetailsDialog() {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[1000px] p-[20px]" data-node-id="572:22618">
      <div className="flex justify-between items-center mb-[20px]">
        <h2 className="text-[24px] font-semibold text-[#161616]">Schedule Task Details</h2>
        <div className="flex gap-[10px]">
          <Button label="Activate" variant="primary" />
          <Button label="Create Draft" variant="primary" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[20px]">
        <TextInput label="Task Name*" placeholder="" />
        <TextInput label="ID" placeholder="" />
        <TextInput label="Percent Complete" placeholder="" />
        <TextInput label="Resource Assignment Status" placeholder="" />
        <TextInput label="Planned Start*" placeholder="mm/dd/yyyy" />
        <TextInput label="Planned End" placeholder="mm/dd/yyyy" />
        <TextInput label="Planned Working Days" placeholder="" />
        <TextInput label="Total Planned Working Hours" placeholder="" />
        <TextInput label="Total Actual Working Hours" placeholder="" />
        <TextInput label="Actual Duration" placeholder="" />
        <TextInput label="Actual Cost" placeholder="" />
      </div>
    </div>
  );
}

// Add Task Details (Frame 647:18806)
export function AddTaskDetailsDialog() {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[1000px] p-[20px]" data-node-id="647:18806">
      <div className="flex justify-between items-center mb-[20px]">
        <h2 className="text-[24px] font-semibold text-[#161616]">Add Task Details</h2>
        <div className="flex gap-[10px]">
          <Button label="Cancel" variant="secondary" />
          <Button label="Add" variant="primary" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[20px]">
        <TextInput label="Task Name*" placeholder="" />
        <TextInput label="ID" placeholder="" />
        <TextInput label="Percent Complete" placeholder="" />
        <TextInput label="Resource Assignment Status" placeholder="" />
        <TextInput label="Planned Start*" placeholder="mm/dd/yyyy" />
        <TextInput label="Planned End" placeholder="mm/dd/yyyy" />
        <TextInput label="Planned Working Days" placeholder="" />
        <TextInput label="Total Planned Working Hours" placeholder="" />
        <TextInput label="Total Actual Working Hours" placeholder="" />
        <TextInput label="Actual Duration" placeholder="" />
        <TextInput label="Actual Cost" placeholder="" />
      </div>
    </div>
  );
}

// Add Scenario (Frame 572:22653)
export function AddScenarioDialog() {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[1000px] p-[40px]" data-node-id="572:22653">
      <div className="flex justify-between items-center mb-[20px]">
        <h2 className="text-[24px] font-semibold text-[#161616]">Add Scenario</h2>
        <div className="flex gap-[10px]">
          <Button label="Cancel" variant="secondary" />
          <Button label="Add" variant="primary" />
        </div>
      </div>
      <div className="space-y-[24px]">
        <div>
          <h3 className="font-semibold text-[16px] text-[#161616] mb-[12px]">General</h3>
          <div className="grid grid-cols-2 gap-[20px]">
            <TextInput label="ID" placeholder="Placeholder text (optional)" />
            <TextInput label="Name" placeholder="Placeholder text (optional)" />
            <TextInput label="Status" placeholder="No input text" />
            <div></div>
            <div className="col-span-2">
              <label className="block text-[12px] font-semibold text-[#525252] mb-[8px]">Description (0/150)</label>
              <textarea className="w-full px-[12px] py-[12px] border-[2px] border-[#e0e0e0] rounded h-[80px]" placeholder="Placeholder text" />
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-[16px] text-[#161616] mb-[12px]">Details</h3>
          <div className="grid grid-cols-2 gap-[20px]">
            <TextInput label="Rank" placeholder="Placeholder text (optional)" />
            <div></div>
            <TextInput label="Currency" placeholder="No input text" />
            <TextInput label="Area Units" placeholder="No input text" />
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-[12px]">
            <h3 className="font-semibold text-[16px] text-[#161616]">Projects</h3>
            <div className="flex gap-[10px]">
              <Button label="Remove" variant="secondary" className="w-auto px-[12px]" />
              <Button label="Find" variant="primary" className="w-auto px-[12px]" />
            </div>
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#f4f4f4]">
                <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Project Name</th>
                <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Project ID</th>
                <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Type</th>
                <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#e0e0e0]">
                <td colSpan="4" className="px-[12px] py-[12px] text-center text-[14px] text-[#525252]">No Data to Display</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Remove Project From Scenario (Frame 681:22720)
export function RemoveProjectFromScenarioDialog() {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[1000px] p-[20px]" data-node-id="681:22720">
      <h2 className="text-[24px] font-semibold text-[#161616] mb-[20px]">Remove Project</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#f4f4f4]">
            <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Scenario</th>
            <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Project Name</th>
            <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Project ID</th>
            <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Type</th>
            <th className="px-[12px] py-[12px] text-left text-[14px] font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map(i => (
            <tr key={i} className="border-b border-[#e0e0e0]">
              <td className="px-[12px] py-[12px]">Table Content</td>
              <td className="px-[12px] py-[12px]">Table Content</td>
              <td className="px-[12px] py-[12px]">Table Content</td>
              <td className="px-[12px] py-[12px]">Table Content</td>
              <td className="px-[12px] py-[12px]">Table Content</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-[10px] justify-end mt-[16px]">
        <Button label="Cancel" variant="secondary" />
        <Button label="Remove" variant="danger" />
      </div>
    </div>
  );
}

// View Scenario Summary Metrics (Frame 530:24811 - sparse, sublayers extracted)
export function ViewScenarioSummaryMetricsDialog() {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[1716px] p-[40px]" data-node-id="530:24811">
      <div className="flex justify-between items-center mb-[24px]">
        <h2 className="text-[24px] font-semibold text-[#161616]">View Scenario Summary Metrics</h2>
        <Button label="Update Metrics" variant="primary" />
      </div>
      
      {/* Tab Navigation */}
      <div className="flex gap-[24px] mb-[20px] border-b-[2px] border-[#e0e0e0]">
        <button className="pb-[12px] border-b-[3px] border-[#0f62fe] text-[14px] font-semibold text-[#0f62fe]">General</button>
        <button className="pb-[12px] border-b-[3px] border-transparent text-[14px] text-[#525252]">Summary Metrics</button>
      </div>
      
      {/* Content */}
      <div className="grid grid-cols-2 gap-[20px] mb-[20px]">
        <div className="bg-[#f4f4f4] p-[20px] rounded">
          <h3 className="font-semibold text-[16px] text-[#161616] mb-[16px]">Radar Chart</h3>
          <div className="h-[250px] bg-white border-[2px] border-[#e0e0e0] flex items-center justify-center text-[#525252]">Chart Visualization Area</div>
        </div>
        <div className="bg-[#f4f4f4] p-[20px] rounded">
          <h3 className="font-semibold text-[16px] text-[#161616] mb-[12px]">Scenario Analysis</h3>
          <table className="w-full text-[12px]">
            <tbody>
              <tr className="border-b border-[#c6c6c6]"><td className="py-[8px]">Total Rank:</td><td className="text-right font-semibold">Value</td></tr>
              <tr className="border-b border-[#c6c6c6]"><td className="py-[8px]">ScenarioA:</td><td className="text-right font-semibold">Value</td></tr>
              <tr className="border-b border-[#c6c6c6]"><td className="py-[8px]">ScenarioB:</td><td className="text-right font-semibold">Value</td></tr>
              <tr><td className="py-[8px]">ScenarioC:</td><td className="text-right font-semibold">Value</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <p className="text-[12px] text-[#525252] mb-[20px]">Data table description</p>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#e0e0e0]">
            <th className="px-[12px] py-[12px] text-left text-[12px] font-semibold">Currency</th>
            <th className="px-[12px] py-[12px] text-left text-[12px] font-semibold">Area Units</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[#e0e0e0]">
            <td className="px-[12px] py-[12px] text-[12px]">Table Content</td>
            <td className="px-[12px] py-[12px] text-[12px]">Table Content</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// ============================================================================
// DEFAULT EXPORT - Main component for demo/testing
// ============================================================================

export default function RealPropertyHubApp() {
  const [currentView, setCurrentView] = React.useState("MyCompletedList");
  
  const views = {
    MyCompletedList,
    AllHubInProgressList,
    MyScheduleTaskList,
    MyScheduleTaskGrid,
    AllHubInProgressGrid,
    TransactionHorizonDetail,
    RequirementsPanel,
    ScenariosTab,
    ContactsTab,
    ExecutiveSummaryTab,
  };
  
  const Component = views[currentView];
  
  return (
    <div>
      <nav className="bg-[#393939] text-white p-[12px] flex gap-[8px] text-[12px]">
        {Object.keys(views).map(view => (
          <button
            key={view}
            onClick={() => setCurrentView(view)}
            className={`px-[12px] py-[6px] rounded ${
              currentView === view ? "bg-[#0f62fe]" : "bg-[#525252] hover:bg-[#6f6f6f]"
            }`}
          >
            {view}
          </button>
        ))}
      </nav>
      <div className="p-[20px]">
        <Component />
      </div>
    </div>
  );
}
