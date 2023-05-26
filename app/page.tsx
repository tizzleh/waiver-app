import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StyleGuide from './components/StyleGuide'
import MyForm from './components/MyForm'
import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from './components/buttons.component';

import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";


export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
  <div>
  <div>
  <Navbar/>
  <StyleGuide />
  <MyForm />
  </div>
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div>
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />

        <h1>Server Session</h1>
        <pre>{JSON.stringify(session)}</pre>
      </div>
       <div className="font-sans">
      <h1 className="font-bold text-4xl">Hello, World!</h1>
      <p className="text-lg">This text is using the League Spartan font.</p>
      <p className="text-16 whitespace-normal break-words">
Sample Liability Waiver for Climbing Gym

[Your Gym Name]
Liability Waiver

I, [Participant's Full Name], hereby acknowledge that I have voluntarily chosen to participate in the activities offered by [Your Gym Name], which may include but are not limited to rock climbing, bouldering, and other related activities (collectively referred to as "the Activities"). In consideration of being permitted to participate in these Activities, I agree to the following:

1. Assumption of Risks:
I understand that participating in the Activities involves certain risks and hazards, including but not limited to falls, injuries, and other unforeseen events. I acknowledge that I have been fully informed of the inherent risks associated with rock climbing and other related activities, and I voluntarily assume all risks associated with my participation.

2. Release of Liability:
I release [Your Gym Name], its owners, employees, agents, instructors, and affiliates (collectively referred to as "the Released Parties") from any and all claims, demands, actions, or causes of action arising out of or related to any loss, damage, or injury, including death, that may be sustained by me or any property belonging to me, whether caused by the negligence of the Released Parties or otherwise.

3. Indemnification:
I agree to indemnify and hold harmless the Released Parties from any loss, liability, damage, or cost, including attorneys' fees, arising out of or related to my participation in the Activities or any breach of this Liability Waiver.

4. Medical Consent:
I authorize [Your Gym Name]'s staff and representatives to seek emergency medical treatment or services on my behalf if they deem it necessary and to notify the emergency contact provided below.

5. Personal Responsibility:
I agree to follow all safety guidelines, instructions, and rules provided by [Your Gym Name] and its staff. I understand that failure to comply may result in my immediate removal from the premises without any refund.

6. Photographic Release:
I grant [Your Gym Name] the right to use any photographs, videos, or other media taken during my participation in the Activities for promotional or marketing purposes without compensation.

7. Severability:
If any provision of this Liability Waiver is found to be unenforceable or invalid, such provision shall be severed from the waiver, and the remaining provisions shall remain in full force and effect.

I have read and understood this Liability Waiver in its entirety, and I voluntarily sign it as my own free act and deed, intending to be legally bound.

Participant's Full Name: ______________________________________

Participant's Signature: _______________________________________

Date: ___________________

Emergency Contact Information:
Name: ______________________________
Phone: ______________________________

Please note that this sample liability waiver is for demonstration purposes only and should not be considered legally binding. It's important to consult with a legal professional to create a comprehensive and enforceable liability waiver tailored to your specific needs and jurisdiction.

      </p>
      <p className="text-14 font-bold">This text is using the League Spartan font.</p>
    </div>
    </main>
    </div>
  );
}
