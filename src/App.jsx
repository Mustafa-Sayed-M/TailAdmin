import { Navigate, Route, Routes } from "react-router-dom";
// ## Dashboard Layout:
import DashboardLayout from "@layouts/DashboardLayout";
// ## Pages:
// ### Menu Page:
import EcommercePage from "@pages/menu/EcommercePage";
import AnalyticsPage from "@pages/menu/AnalyticsPage";
import MarketingPage from "@pages/menu/MarketingPage";
import CRMPage from "@pages/menu/CRMPage";
import CalendarPage from "@pages/menu/CalendarPage";
import ProfilePage from "@pages/menu/ProfilePage";
import TaskListPage from "@pages/menu/TaskListPage";
import TaskKanbanPage from "@pages/menu/TaskKanbanPage";
import FormElementsPage from "@pages/menu/FormElementsPage";
import FormLayoutPage from "@pages/menu/FormLayoutPage";
import FormValidationPage from "@pages/menu/FormValidationPage";
import TablesPage from "@pages/menu/TablesPage";
import SettingsPage from "@pages/menu/SettingsPage";
import FileManagePage from "@pages/menu/FileManagePage";
import DataTablesPage from "@pages/menu/DataTablesPage";
import PricingTablePage from "@pages/menu/PricingTablePage";
import ErrorPage from "@pages/ErrorPage";
import MailSuccessPage from "@pages/menu/MailSuccessPage";
// ### Support Page:
import MessagesPage from "@pages/support/MessagesPage";
import InboxPage from "@pages/support/InboxPage";
import InvoicePage from "@pages/support/InvoicePage";
// ### Others Page:
import ChartPage from "@pages/others/ChartPage";
import AlertsPage from "@pages/others/AlertsPage";
import ButtonsPage from "@pages/others/ButtonsPage";
import ButtonsGroupPage from "@pages/others/ButtonsGroupPage";
import BadgePage from "@pages/others/BadgePage";
import BreadcrumbPage from "@pages/others/breadcrumb";
import CardsPage from "@pages/others/CardsPage";
import DropdownsPage from "@pages/others/DropdownsPage";
import ModalsPage from "@pages/others/ModalsPage";
import TabsPage from "@pages/others/TabsPage";
import TooltipsPage from "@pages/others/TooltipsPage";
import PopoversPage from "@pages/others/PopoversPage";
import AccordionsPage from "@pages/others/AccordionsPage";
import NotificationsPage from "@pages/others/NotificationsPage";
import PaginationPage from "@pages/others/PaginationPage";
import ProgressPage from "@pages/others/ProgressPage";
import CarouselPage from "@pages/others/CarouselPage";
import ImagesPage from "@pages/others/ImagesPage";
import VideosPage from "@pages/others/VideosPage";
// ### Authentication Page:
import SigninPage from "@pages/auth/SigninPage";
import SignUpPage from "@pages/auth/SignUpPage";
import ResetPasswordPage from "@pages/auth/ResetPasswordPage";

function App() {
  return (
    <div className='App'>
      <Routes>
        {/* Dashboard Layout */}
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate replace to={'/analytics'} />} />
          {/* Menu */}
          <Route path="e-commerce" element={<EcommercePage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="marketing" element={<MarketingPage />} />
          <Route path="crm" element={<CRMPage />} />
          <Route path="calender" element={<CalendarPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="task-list" element={<TaskListPage />} />
          <Route path="task-kanban" element={<TaskKanbanPage />} />
          <Route path="form-elements" element={<FormElementsPage />} />
          <Route path="form-layout" element={<FormLayoutPage />} />
          <Route path="form-validation" element={<FormValidationPage />} />
          <Route path="tables" element={<TablesPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="file-manager" element={<FileManagePage />} />
          <Route path="data-tables" element={<DataTablesPage />} />
          <Route path="pricing-tables" element={<PricingTablePage />} />
          <Route path="error-page" element={<ErrorPage />} />
          <Route path="mail-success" element={<MailSuccessPage />} />
          {/* Support */}
          <Route path="messages" element={<MessagesPage />} />
          <Route path="inbox" element={<InboxPage />} />
          <Route path="invoice" element={<InvoicePage />} />
          {/* Other */}
          <Route path="chart" element={<ChartPage />} />
          <Route path="alerts" element={<AlertsPage />} />
          <Route path="buttons" element={<ButtonsPage />} />
          <Route path="buttons-group" element={<ButtonsGroupPage />} />
          <Route path="badge" element={<BadgePage />} />
          <Route path="breadcrumb" element={<BreadcrumbPage />} />
          <Route path="cards" element={<CardsPage />} />
          <Route path="dropdowns" element={<DropdownsPage />} />
          <Route path="modals" element={<ModalsPage />} />
          <Route path="tabs" element={<TabsPage />} />
          <Route path="tooltips" element={<TooltipsPage />} />
          <Route path="popovers" element={<PopoversPage />} />
          <Route path="accordion" element={<AccordionsPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="pagination" element={<PaginationPage />} />
          <Route path="progress" element={<ProgressPage />} />
          <Route path="carousel" element={<CarouselPage />} />
          <Route path="images" element={<ImagesPage />} />
          <Route path="videos" element={<VideosPage />} />
          {/* Auth */}
          <Route path="signin" element={<SigninPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
        </Route>
        {/* Get Pro */}
        <Route path="/get-pro" />
        {/* Not Found Page */}
        <Route path="*" />
      </Routes>
    </div>
  )
}

export default App;