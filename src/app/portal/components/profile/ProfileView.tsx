'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
      ChevronLeft,
      User,
      Calendar,
      Bell,
      Shield,
      Mail,
      Phone,
      Save,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import CustomSelect from '../booking/CustomSelect'
import Toggle from '../ui/Toggle'

const MAJOR_OPTIONS = [
      'Computer Science',
      'Data Science',
      'Information Systems',
      'Software Engineering',
]
const YEAR_OPTIONS = ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Graduate']
const LANGUAGE_OPTIONS = ['English', 'Spanish', 'French', 'German', 'Mandarin']
const TIMEZONE_OPTIONS = [
      'America/New_York',
      'America/Chicago',
      'America/Denver',
      'America/Los_Angeles',
      'Europe/London',
]
const VISIBILITY_OPTIONS = [
      'Public - Visible to all',
      'Limited - Visible to instructors only',
      'Private - Hidden from search',
]

export default function ProfileView() {
      const [major, setMajor] = useState('Computer Science')
      const [year, setYear] = useState('Junior')
      const [language, setLanguage] = useState('English')
      const [timezone, setTimezone] = useState('America/New_York')
      const [visibility, setVisibility] = useState(
            'Limited - Visible to instructors only',
      )

      // Notification states
      const [emailNotif, setEmailNotif] = useState(true)
      const [smsNotif, setSmsNotif] = useState(false)
      const [reminders, setReminders] = useState(true)
      const [summary, setSummary] = useState(true)
      const [alerts, setAlerts] = useState(true)

      // Privacy states
      const [shareSchedule, setShareSchedule] = useState(false)

      return (
            <div className="space-y-12 font-comfortaa pb-40">
                  {/* Header Section */}
                  <div className="flex flex-col gap-8">
                        <Link
                              href="/portal"
                              className="flex items-center gap-2 text-[#0B0E14] font-bold text-sm tracking-tight hover:text-[#ADB5BD] transition-all group w-fit"
                        >
                              <ChevronLeft
                                    size={18}
                                    className="group-hover:-translate-x-1 transition-transform"
                              />
                              Back to Dashboard
                        </Link>

                        <div>
                              <h1 className="text-3xl font-bold text-[#0B0E14]">
                                    Profile Settings
                              </h1>
                              <p className="text-[#6C757D] mt-1 text-base font-medium">
                                    Manage your account and preferences
                              </p>
                        </div>
                  </div>

                  <div className="space-y-8">
                        {/* Personal Information */}
                        <div className="bg-white border border-[#E9ECEF] rounded-[32px] p-10 shadow-sm">
                              <div className="mb-10">
                                    <div className="flex items-center gap-3 mb-2 text-[#0B0E14]">
                                          <User size={20} strokeWidth={2.5} />
                                          <h2 className="text-xl font-bold">
                                                Personal Information
                                          </h2>
                                    </div>
                                    <p className="text-[#6C757D] text-sm font-medium">
                                          Update your personal details and
                                          academic information
                                    </p>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                          <label className="text-sm font-bold text-[#0B0E14]">
                                                First Name
                                          </label>
                                          <input
                                                type="text"
                                                defaultValue="John"
                                                className="w-full h-14 px-5 rounded-xl bg-[#F8F9FA] border border-transparent focus:border-[#ADB5BD] focus:bg-white transition-all text-sm font-medium outline-none"
                                          />
                                    </div>
                                    <div className="space-y-2">
                                          <label className="text-sm font-bold text-[#0B0E14]">
                                                Last Name
                                          </label>
                                          <input
                                                type="text"
                                                defaultValue="Doe"
                                                className="w-full h-14 px-5 rounded-xl bg-[#F8F9FA] border border-transparent focus:border-[#ADB5BD] focus:bg-white transition-all text-sm font-medium outline-none"
                                          />
                                    </div>
                                    <div className="space-y-2">
                                          <label className="text-sm font-bold text-[#0B0E14]">
                                                Email Address
                                          </label>
                                          <div className="relative group">
                                                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#ADB5BD]">
                                                      <Mail size={18} />
                                                </div>
                                                <input
                                                      type="email"
                                                      defaultValue="john.doe@university.edu"
                                                      className="w-full h-14 pl-12 pr-5 rounded-xl bg-[#F8F9FA] border border-transparent focus:border-[#ADB5BD] focus:bg-white transition-all text-sm font-medium outline-none"
                                                />
                                          </div>
                                    </div>
                                    <div className="space-y-2">
                                          <label className="text-sm font-bold text-[#0B0E14]">
                                                Phone Number
                                          </label>
                                          <div className="relative group">
                                                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#ADB5BD]">
                                                      <Phone size={18} />
                                                </div>
                                                <input
                                                      type="tel"
                                                      defaultValue="+1 (555) 123-4567"
                                                      className="w-full h-14 pl-12 pr-5 rounded-xl bg-[#F8F9FA] border border-transparent focus:border-[#ADB5BD] focus:bg-white transition-all text-sm font-medium outline-none"
                                                />
                                          </div>
                                    </div>
                                    <div className="space-y-2">
                                          <label className="text-sm font-bold text-[#0B0E14]">
                                                Student ID
                                          </label>
                                          <input
                                                type="text"
                                                defaultValue="STU123456"
                                                disabled
                                                className="w-full h-14 px-5 rounded-xl bg-[#F8F9FA] border border-transparent text-[#DDE2E5] text-sm font-medium outline-none cursor-not-allowed"
                                          />
                                    </div>
                                    <div className="space-y-2">
                                          <label className="text-sm font-bold text-[#0B0E14]">
                                                Department
                                          </label>
                                          <input
                                                type="text"
                                                defaultValue="Engineering"
                                                className="w-full h-14 px-5 rounded-xl bg-[#F8F9FA] border border-transparent focus:border-[#ADB5BD] focus:bg-white transition-all text-sm font-medium outline-none"
                                          />
                                    </div>
                                    <CustomSelect
                                          label="Major"
                                          options={MAJOR_OPTIONS}
                                          value={major}
                                          onChange={setMajor}
                                          placeholder="Select major"
                                    />
                                    <CustomSelect
                                          label="Academic Year"
                                          options={YEAR_OPTIONS}
                                          value={year}
                                          onChange={setYear}
                                          placeholder="Select year"
                                    />
                              </div>

                              <div className="mt-8 space-y-2">
                                    <label className="text-sm font-bold text-[#0B0E14]">
                                          Bio (Optional)
                                    </label>
                                    <textarea
                                          className="w-full h-32 p-5 rounded-xl bg-[#F8F9FA] border border-transparent focus:border-[#ADB5BD] focus:bg-white transition-all text-sm font-medium outline-none resize-none leading-relaxed"
                                          defaultValue="Computer Science student interested in software development and artificial intelligence."
                                    />
                              </div>
                        </div>

                        {/* Preferences */}
                        <div className="bg-white border border-[#E9ECEF] rounded-[32px] p-10 shadow-sm">
                              <div className="mb-10">
                                    <div className="flex items-center gap-3 mb-2 text-[#0B0E14]">
                                          <Calendar
                                                size={20}
                                                strokeWidth={2.5}
                                          />
                                          <h2 className="text-xl font-bold">
                                                Preferences
                                          </h2>
                                    </div>
                                    <p className="text-[#6C757D] text-sm font-medium">
                                          Configure your language, timezone, and
                                          scheduling preferences
                                    </p>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <CustomSelect
                                          label="Preferred Language"
                                          options={LANGUAGE_OPTIONS}
                                          value={language}
                                          onChange={setLanguage}
                                          placeholder="Select language"
                                    />
                                    <CustomSelect
                                          label="Timezone"
                                          options={TIMEZONE_OPTIONS}
                                          value={timezone}
                                          onChange={setTimezone}
                                          placeholder="Select timezone"
                                    />
                              </div>
                        </div>

                        {/* Notification Settings */}
                        <div className="bg-white border border-[#E9ECEF] rounded-[32px] p-10 shadow-sm">
                              <div className="mb-10">
                                    <div className="flex items-center gap-3 mb-2 text-[#0B0E14]">
                                          <Bell size={20} strokeWidth={2.5} />
                                          <h2 className="text-xl font-bold">
                                                Notification Settings
                                          </h2>
                                    </div>
                                    <p className="text-[#6C757D] text-sm font-medium">
                                          Choose how you want to receive
                                          appointment notifications
                                    </p>
                              </div>

                              <div className="space-y-6">
                                    <NotificationItem
                                          title="Email Notifications"
                                          subtitle="Receive appointment confirmations and reminders via email"
                                          checked={emailNotif}
                                          onChange={setEmailNotif}
                                    />
                                    <NotificationItem
                                          title="SMS Notifications"
                                          subtitle="Get text message reminders for upcoming appointments"
                                          checked={smsNotif}
                                          onChange={setSmsNotif}
                                    />
                                    <NotificationItem
                                          title="Appointment Reminders"
                                          subtitle="Get reminded 24 hours before your appointments"
                                          checked={reminders}
                                          onChange={setReminders}
                                    />
                                    <NotificationItem
                                          title="Weekly Schedule Summary"
                                          subtitle="Receive a summary of your upcoming week every Sunday"
                                          checked={summary}
                                          onChange={setSummary}
                                    />
                                    <NotificationItem
                                          title="Cancellation Alerts"
                                          subtitle="Get notified immediately when appointments are cancelled"
                                          checked={alerts}
                                          onChange={setAlerts}
                                    />
                              </div>
                        </div>

                        {/* Privacy Settings */}
                        <div className="bg-white border border-[#E9ECEF] rounded-[32px] p-10 shadow-sm">
                              <div className="mb-10">
                                    <div className="flex items-center gap-3 mb-2 text-[#0B0E14]">
                                          <Shield size={20} strokeWidth={2.5} />
                                          <h2 className="text-xl font-bold">
                                                Privacy Settings
                                          </h2>
                                    </div>
                                    <p className="text-[#6C757D] text-sm font-medium">
                                          Control your privacy and data sharing
                                          preferences
                                    </p>
                              </div>

                              <div className="space-y-8">
                                    <CustomSelect
                                          label="Profile Visibility"
                                          options={VISIBILITY_OPTIONS}
                                          value={visibility}
                                          onChange={setVisibility}
                                          placeholder="Select visibility"
                                    />
                                    <div className="flex items-center justify-between">
                                          <div className="space-y-1">
                                                <h4 className="text-sm font-bold text-[#0B0E14]">
                                                      Share Schedule with
                                                      Advisors
                                                </h4>
                                                <p className="text-xs text-[#6C757D] font-medium leading-relaxed">
                                                      Allow your academic
                                                      advisors to view your
                                                      appointment schedule
                                                </p>
                                          </div>
                                          <Toggle
                                                checked={shareSchedule}
                                                onChange={setShareSchedule}
                                          />
                                    </div>
                              </div>
                        </div>

                        {/* Account Status */}
                        <div className="bg-white border border-[#E9ECEF] rounded-[32px] p-10 shadow-sm">
                              <div className="mb-8">
                                    <h2 className="text-xl font-bold text-[#0B0E14]">
                                          Account Status
                                    </h2>
                                    <p className="text-[#6C757D] text-sm mt-1 font-medium">
                                          Your current account information and
                                          status
                                    </p>
                              </div>

                              <div className="flex items-start justify-between mb-8">
                                    <div className="space-y-1">
                                          <h4 className="text-sm font-bold text-[#0B0E14]">
                                                Account Status
                                          </h4>
                                          <p className="text-xs text-[#6C757D] font-medium">
                                                Active student account
                                          </p>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-[#EBFDDC] text-[10px] font-bold text-[#55C33E]">
                                          Active
                                    </span>
                              </div>

                              <div className="border-t border-[#F8F9FA] pt-8 space-y-4">
                                    <StatusItem
                                          label="Account created"
                                          value="September 2023"
                                    />
                                    <StatusItem
                                          label="Last login"
                                          value="Today at 2:30 PM"
                                    />
                                    <StatusItem
                                          label="Total appointments"
                                          value="24"
                                    />
                                    <StatusItem
                                          label="Appointments this semester"
                                          value="8"
                                    />
                              </div>
                        </div>
                  </div>

                  {/* Save Button Overlay */}
                  <div className="fixed bottom-10 right-10 z-50">
                        <button className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#0B0E14] text-white font-bold text-sm shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:bg-[#1A1E26] transition-all group">
                              <Save
                                    size={20}
                                    className="group-hover:scale-110 transition-transform"
                              />
                              Save Changes
                        </button>
                  </div>
            </div>
      )
}

function NotificationItem({
      title,
      subtitle,
      checked,
      onChange,
}: {
      title: string
      subtitle: string
      checked: boolean
      onChange: (v: boolean) => void
}) {
      return (
            <div className="flex items-center justify-between group">
                  <div className="space-y-1">
                        <h4 className="text-sm font-bold text-[#0B0E14]">
                              {title}
                        </h4>
                        <p className="text-xs text-[#6C757D] font-medium leading-relaxed">
                              {subtitle}
                        </p>
                  </div>
                  <Toggle checked={checked} onChange={onChange} />
            </div>
      )
}

function StatusItem({ label, value }: { label: string; value: string }) {
      return (
            <div className="flex items-center text-xs font-medium">
                  <span className="text-[#ADB5BD] w-1.5 h-1.5 bg-[#ADB5BD] rounded-full mr-3" />
                  <span className="text-[#6C757D] mr-2">{label}:</span>
                  <span className="text-[#0B0E14] font-bold">{value}</span>
            </div>
      )
}
