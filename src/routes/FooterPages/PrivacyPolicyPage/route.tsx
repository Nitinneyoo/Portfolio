import PrivacyPolicyScreen from '@/components/FooterPages/PrivacyPolicyPage/PrivacyPolicyScreen'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/FooterPages/PrivacyPolicyPage')({
  component: PrivacyPolicyScreen,
})

