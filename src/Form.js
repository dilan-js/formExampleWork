/* eslint-disable */
import React, { useEffect, useState, useContext } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import {
  TextField,
  Button,
  FormControlLabel,
  Select,
  FormControl,
  FormLabel,
  RadioGroup,
} from "@material-ui/core";
import { Radio } from "@material-ui/core";
import { questions } from "./questions";

import Question from "./QuestionCard";
import RadioInput from "./RadioInput";
import TextInput from "./TextInput";
import CheckboxInput from "./CheckboxInput";

const useStyles = makeStyles((theme) => ({
  submitButton: {
    backgroundColor: "red",
    color: "#FFFFFF",
    fontWeight: "bold",
    paddingLeft: "20px",
    paddingRight: "20px",
    marginLeft: "6.75px",
  },
}));

const marks = [
  {
    value: 0,
    label: "$0",
  },
  {
    value: 5000,
    label: "$5000",
  },
];

const RentSlider = withStyles({
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
});

export default function Form() {
  const [personValues, setPersonValues] = useState(null);
  const classes = useStyles();
  questions.forEach((question) => {
    question.answer = "";
  });
  const [formValues, setFormValues] = useState(questions);

  // const submitUsersEntries = (values) => {

  //   console.log(values);
  // };

  const [rentValue, setRentValue] = useState([0, 5000]);

  const handleRentChange = (event, newValue) => {
    setRentValue(newValue);
  };

  const [value, setValue] = React.useState("female");

  const handleChange = (id, answer) => {
    formValues.forEach((question) => {
      if (question.id === id) {
        question.answer = answer;
      }
    });
    setFormValues(formValues);
    console.log(formValues);
  };

  return (
    <form>
      {formValues.map((formValue, i) => {
        return (
          <Question key={i} question={formValue.questionTitle}>
            {/* <RadioInput
              options={formValue.options}
              name={formValue.name}
              onSelect={(answer) => handleChange(formValue.id, answer)}
            /> */}
            <TextInput />
            <CheckboxInput options={formValue.options} name={formValue.name} />
          </Question>
        );
      })}

      <Button type="submit" color="primary" variant="contained">
        Register & Submit
      </Button>
    </form>
  );
}

{
  /* <Question question="What is your first name? ">
              <FormikInput placeholder="Johnny" name="firstName" type="input" />
            </Question>

            <Question question="What is your last name? ">
              <FormikInput placeholder="Appleseed" name="lastName" type="input" />
            </Question>

            <Question question="What is your email address?">
              <FormikInput placeholder="Appleseed" name="email" type="input" />
            </Question>

            <Question question="Create a password">
              <FormikInput placeholder="•••••••" name="password" type="input" />
            </Question> */
}

{
  /* <Question question="Where are you moving? (** if you do not see your city here, please check back later as we expand to more cities!**) ">
              <FormikRadioGroup name="movingTo" type="radio" value="BayArea" label="Bay Area" />
              <FormikRadioGroup
                name="movingTo"
                type="radio"
                value="SanFrancisco"
                label="San Francisco"
              />
              <FormikRadioGroup name="movingTo" type="radio" value="NYC" label="NYC" />
            </Question>

            <Question question="When are you moving? ">
              <FormikDatePicker />
            </Question>

            <Question question="What is your current age-range? ">
              <FormikRadioGroup name="age" type="radio" value="17-20" label="17-20" />
              <FormikRadioGroup name="age" type="radio" value="21-23" label="21-23" />
              <FormikRadioGroup name="age" type="radio" value="24-26" label="24-26" />
              <FormikRadioGroup name="age" type="radio" value="27-29" label="27-29" />
              <FormikRadioGroup name="age" type="radio" value="30plus" label="> 30" />
            </Question>

            <Question question="What university/college do you attend? ">
              <FormikRadioGroup name="education" type="radio" value="Stanford" label="Stanford" />
              <FormikRadioGroup
                name="education"
                type="radio"
                value="UCBerkeley"
                label="UC Berkeley"
              />
              <FormikRadioGroup name="education" type="radio" value="UCLA" label="UCLA" />
              <FormikRadioGroup name="education" type="radio" value="Harvard" label="Harvard" />
              <FormikRadioGroup name="education" type="radio" value="Yale" label="Yale" />
              <FormikRadioGroup name="education" type="radio" value="MIT" label="MIT" />
            </Question>
            <Question question="What is your major or career interest?">
              <FormikInput placeholder="Software Engineer " name="majorOrCareer" type="input" />
            </Question>

            <Question question="Would you be open to sharing a room? ">
              <FormikRadioGroup
                name="sharingRoom"
                type="radio"
                value="1"
                label="1 - not a chance"
              />
              <FormikRadioGroup name="sharingRoom" type="radio" value="2" label="2" />
              <FormikRadioGroup name="sharingRoom" type="radio" value="3" label="3" />
              <FormikRadioGroup name="sharingRoom" type="radio" value="4" label="4" />
              <FormikRadioGroup name="sharingRoom" type="radio" value="5" label="5 - sure!" />
            </Question>

            <Question question="What is your monthly maximum budget for rent (including utilities)? ">
              <div style={{ padding: '0 20px' }}>
                <Slider
                  value={rentValue}
                  valueLabelDisplay="on"
                  max={5000}
                  min={0}
                  step={100}
                  marks={marks}
                  name="rentBudget"
                  valueLabelFormat={(value) => `$${value}`}
                  onChange={handleRentChange}
                  aria-labelledby="range-slider"
                  form={{
                    isSubmitting,
                    setFieldValue
                  }}
                />
              </div>
            </Question>
            <Question question="What is your gender identity? (*note: we never share any data from this form without your consent) ">
              <FormikRadioGroup name="genderIdentity" type="radio" value="Man" label="Man" />
              <FormikRadioGroup name="genderIdentity" type="radio" value="Woman" label="Woman" />
              <FormikRadioGroup name="genderIdentity" type="radio" value="NB" label="Non-Binary" />
              <FormikRadioGroup
                name="genderIdentity"
                type="radio"
                value="Other"
                label="Prefer not to say"
              />
            </Question>
            <Question question="What type of housing do you prefer? ">
              <FormikRadioGroup
                name="housingSex"
                type="radio"
                value="SingleSex"
                label="Single-sex"
              />
              <FormikRadioGroup name="housingSex" type="radio" value="Coed" label="Coed" />
              <FormikRadioGroup
                name="housingSex"
                type="radio"
                value="Other"
                label="No preference"
              />
            </Question>
            <Question question="Do you identify as LGBTQ+">
              <FormikRadioGroup name="lgbtqAffiliation" type="radio" value="Yes" label="Yes" />
              <FormikRadioGroup name="lgbtqAffiliation" type="radio" value="No" label="No" />
              <FormikRadioGroup
                name="lgbtqAffiliation"
                type="radio"
                value="Other"
                label="Prefer not to say"
              />
            </Question>

            <Question question="If you answered 'yes' to the previous question, how important is it for your roommate to also be LGBTQ+?">
              <FormikRadioGroup
                name="lgbtqPreference"
                type="radio"
                value="1"
                label="1 - no preference"
              />
              <FormikRadioGroup name="lgbtqPreference" type="radio" value="2" label="2" />
              <FormikRadioGroup name="lgbtqPreference" type="radio" value="3" label="3" />
              <FormikRadioGroup name="lgbtqPreference" type="radio" value="4" label="4" />
              <FormikRadioGroup
                name="lgbtqPreference"
                type="radio"
                value="5"
                label="5 - very important"
              />
            </Question>

            <Question question="How religious are you? ">
              <FormikRadioGroup
                name="religiousLevel"
                type="radio"
                value="1"
                label="1 - not religious at all"
              />
              <FormikRadioGroup name="religiousLevel" type="radio" value="2" label="2" />
              <FormikRadioGroup name="religiousLevel" type="radio" value="3" label="3" />
              <FormikRadioGroup name="religiousLevel" type="radio" value="4" label="4" />
              <FormikRadioGroup
                name="religiousLevel"
                type="radio"
                value="5"
                label="5 - very religious"
              />
            </Question>

            <Question question="What is your preference for your roommate's religiosity? ">
              <FormikRadioGroup
                name="religiousPreference"
                type="radio"
                value="1"
                label="1 - no preference"
              />
              <FormikRadioGroup name="religiousPreference" type="radio" value="2" label="2" />
              <FormikRadioGroup name="religiousPreference" type="radio" value="3" label="3" />
              <FormikRadioGroup name="religiousPreference" type="radio" value="4" label="4" />
              <FormikRadioGroup
                name="religiousPreference"
                type="radio"
                value="5"
                label="5 - prefer same as me"
              />
            </Question>

            <Question question="Where do you lie on the political spectrum? ">
              <FormikRadioGroup
                name="politicalAffiliation"
                type="radio"
                value="1"
                label="Liberal"
              />
              <FormikRadioGroup
                name="politicalAffiliation"
                type="radio"
                value="2"
                label="Moderate"
              />
              <FormikRadioGroup
                name="politicalAffiliation"
                type="radio"
                value="3"
                label="Conservative"
              />
              <FormikRadioGroup name="politicalAffiliation" type="radio" value="4" label="Other" />
            </Question>
            <Question question="How political are you? ">
              <FormikRadioGroup
                name="politicalLevel"
                type="radio"
                value="1"
                label="1 - not political at all"
              />
              <FormikRadioGroup name="politicalLevel" type="radio" value="2" label="2" />
              <FormikRadioGroup name="politicalLevel" type="radio" value="3" label="3" />
              <FormikRadioGroup name="politicalLevel" type="radio" value="4" label="4" />
              <FormikRadioGroup
                name="politicalLevel"
                type="radio"
                value="5"
                label="5 - very political"
              />
            </Question>

            <Question question="What is your preference for your roommate's political beliefs? ">
              <FormikRadioGroup
                name="politicalPreference"
                type="radio"
                value="1"
                label="1 - no preference"
              />
              <FormikRadioGroup name="politicalPreference" type="radio" value="2" label="2" />
              <FormikRadioGroup name="politicalPreference" type="radio" value="3" label="3" />
              <FormikRadioGroup name="politicalPreference" type="radio" value="4" label="4" />
              <FormikRadioGroup
                name="politicalPreference"
                type="radio"
                value="5"
                label="5 - same affiliation as me"
              />
            </Question>

            <Question question="How neat/tidy are you (in shared spaces specifically)?">
              <FormikRadioGroup
                name="neatnessLevel"
                type="radio"
                value="1"
                label="1 - I am not particularly neat"
              />
              <FormikRadioGroup name="neatnessLevel" type="radio" value="2" label="2" />
              <FormikRadioGroup name="neatnessLevel" type="radio" value="3" label="3" />
              <FormikRadioGroup name="neatnessLevel" type="radio" value="4" label="4" />
              <FormikRadioGroup
                name="neatnessLevel"
                type="radio"
                value="5"
                label="5 - extremely neat"
              />
            </Question>

            <Question question="What is your preference for your roommate’s cleanliness? (in shared spaces specifically)?">
              <FormikRadioGroup
                name="neatnessPreference"
                type="radio"
                value="1"
                label="1 - no preference"
              />
              <FormikRadioGroup name="neatnessPreference" type="radio" value="2" label="2" />
              <FormikRadioGroup name="neatnessPreference" type="radio" value="3" label="3" />
              <FormikRadioGroup name="neatnessPreference" type="radio" value="4" label="4" />
              <FormikRadioGroup
                name="neatnessPreference"
                type="radio"
                value="5"
                label="5 - prefer same as me"
              />
            </Question>

            <Question question="How often do you drink alcohol?">
              <FormikRadioGroup name="drinkingLevel" type="radio" value="1" label="1 - never" />
              <FormikRadioGroup
                name="drinkingLevel"
                type="radio"
                value="2"
                label="2 - sometimes "
              />
              <FormikRadioGroup
                name="drinkingLevel"
                type="radio"
                value="3"
                label="3 - most weekends"
              />
              <FormikRadioGroup
                name="drinkingLevel"
                type="radio"
                value="4"
                label="4 - every weekend"
              />
              <FormikRadioGroup name="drinkingLevel" type="radio" value="5" label="5 - every day" />
            </Question>
            <Question question="What is your preference on your roommate's drinking?">
              <FormikRadioGroup
                name="drinkingPreference"
                type="radio"
                value="1"
                label="1 - no preference"
              />
              <FormikRadioGroup name="drinkingPreference" type="radio" value="2" label="2" />
              <FormikRadioGroup name="drinkingPreference" type="radio" value="3" label="3" />
              <FormikRadioGroup name="drinkingPreference" type="radio" value="4" label="4" />
              <FormikRadioGroup
                name="drinkingPreference"
                type="radio"
                value="5"
                label="5 - prefer same behavior as me"
              />
            </Question>

            <Question question="How often do you smoke marijuana?">
              <FormikRadioGroup name="potLevel" type="radio" value="1" label="1 - never" />
              <FormikRadioGroup name="potLevel" type="radio" value="2" label="2 - sometimes" />
              <FormikRadioGroup name="potLevel" type="radio" value="3" label="3 - most weekends" />
              <FormikRadioGroup name="potLevel" type="radio" value="4" label="4 - every weekend" />
              <FormikRadioGroup name="potLevel" type="radio" value="5" label="5 - every day" />
            </Question>

            <Question question="What is your preference on your roommate's marijuana smoking habits?">
              <FormikRadioGroup
                name="potPreference"
                type="radio"
                value="1"
                label="1 - no preference"
              />
              <FormikRadioGroup name="potPreference" type="radio" value="2" label="2 " />
              <FormikRadioGroup name="potPreference" type="radio" value="3" label="3" />
              <FormikRadioGroup name="potPreference" type="radio" value="4" label="4" />
              <FormikRadioGroup
                name="potPreference"
                type="radio"
                value="5"
                label="5 - prefer same as me"
              />
            </Question>

            <Question question="How often do you smoke cigarettes?">
              <FormikRadioGroup name="smokingLevel" type="radio" value="1" label="1 - never" />
              <FormikRadioGroup name="smokingLevel" type="radio" value="2" label="2 - sometimes" />
              <FormikRadioGroup
                name="smokingLevel"
                type="radio"
                value="3"
                label="3 - most weekends"
              />
              <FormikRadioGroup
                name="smokingLevel"
                type="radio"
                value="4"
                label="4 - every weekend"
              />
              <FormikRadioGroup name="smokingLevel" type="radio" value="5" label="5 - every day" />
            </Question>

            <Question question="What is your preference on your roommate's cigarette smoking habits?">
              <FormikRadioGroup
                name="smokingPreference"
                type="radio"
                value="1"
                label="1 - no preference"
              />
              <FormikRadioGroup name="smokingPreference" type="radio" value="2" label="2 " />
              <FormikRadioGroup name="smokingPreference" type="radio" value="3" label="3" />
              <FormikRadioGroup name="smokingPreference" type="radio" value="4" label="4" />
              <FormikRadioGroup
                name="smokingPreference"
                type="radio"
                value="5"
                label="5 - prefer same as me"
              />
            </Question>

            <Question question="How often do you anticipate bringing friends over?">
              <FormikRadioGroup
                name="bringingFriendsLevel"
                type="radio"
                value="1"
                label="1 - the never"
              />
              <FormikRadioGroup name="bringingFriendsLevel" type="radio" value="2" label="2 " />
              <FormikRadioGroup name="bringingFriendsLevel" type="radio" value="3" label="3" />
              <FormikRadioGroup name="bringingFriendsLevel" type="radio" value="4" label="4" />
              <FormikRadioGroup
                name="bringingFriendsLevel"
                type="radio"
                value="5"
                label="5 - all the time"
              />
            </Question>

            <Question question="How do you feel about your roommate bringing friends over?">
              <FormikRadioGroup
                name="bringingFriendsPreference"
                type="radio"
                value="1"
                label="1 - the less frequent, the better"
              />
              <FormikRadioGroup
                name="bringingFriendsPreference"
                type="radio"
                value="2"
                label="2 "
              />
              <FormikRadioGroup name="bringingFriendsPreference" type="radio" value="3" label="3" />
              <FormikRadioGroup name="bringingFriendsPreference" type="radio" value="4" label="4" />
              <FormikRadioGroup
                name="bringingFriendsPreference"
                type="radio"
                value="5"
                label="5 - I don't mind at all"
              />
            </Question>

            <Question question="What type of relationship do you want with your roommate?">
              <FormikRadioGroup
                name="roommateDesiredRelationship"
                type="radio"
                value="1"
                label="1 - just need a roommate"
              />
              <FormikRadioGroup
                name="roommateDesiredRelationship"
                type="radio"
                value="2"
                label="2 "
              />
              <FormikRadioGroup
                name="roommateDesiredRelationship"
                type="radio"
                value="3"
                label="3"
              />
              <FormikRadioGroup
                name="roommateDesiredRelationship"
                type="radio"
                value="4"
                label="4"
              />
              <FormikRadioGroup
                name="roommateDesiredRelationship"
                type="radio"
                value="5"
                label="5 - I want to be best friends"
              />
            </Question>

            <Question question="What is your relationship status? ">
              <FormikRadioGroup
                name="relationshipStatus"
                type="radio"
                value="1"
                label="Single and not looking"
              />
              <FormikRadioGroup
                name="relationshipStatus"
                type="radio"
                value="2"
                label="Single and looking "
              />
              <FormikRadioGroup
                name="relationshipStatus"
                type="radio"
                value="3"
                label="In a relationship"
              />
              <FormikRadioGroup
                name="relationshipStatus"
                type="radio"
                value="4"
                label="It's complicated"
              />
              <FormikRadioGroup
                name="relationshipStatus"
                type="radio"
                value="Other"
                label="Prefer not to say"
              />
            </Question>

<Question question="What is your preference on your roommate’s relationship status?">
              <FormikRadioGroup
                name="relationshipStatusPreference"
                type="radio"
                value="1"
                label="1- No preference"
              />
              <FormikRadioGroup
                name="relationshipStatusPreference"
                type="radio"
                value="2"
                label="2"
              />
              <FormikRadioGroup
                name="relationshipStatusPreference"
                type="radio"
                value="3"
                label="3"
              />
              <FormikRadioGroup
                name="relationshipStatusPreference"
                type="radio"
                value="4"
                label="4"
              />
              <FormikRadioGroup
                name="relationshipStatusPreference"
                type="radio"
                value="Other"
                label="5 - prefer same as me"
              />
            </Question>

            <Question question="How would you describe your spending habits?">
              <FormikRadioGroup
                name="spendingHabitsLevel"
                type="radio"
                value="1"
                label="1- very frugal"
              />
              <FormikRadioGroup name="spendingHabitsLevel" type="radio" value="2" label="2" />
              <FormikRadioGroup name="spendingHabitsLevel" type="radio" value="3" label="3" />
              <FormikRadioGroup name="spendingHabitsLevel" type="radio" value="4" label="4" />
              <FormikRadioGroup
                name="spendingHabitsLevel"
                type="radio"
                value="Other"
                label="5 - not frugal at all"
              />
            </Question>

            <Question question="What is your preference on your roommate's spending habits?">
              <FormikRadioGroup
                name="spendingPreference"
                type="radio"
                value="1"
                label="1- no preference"
              />
              <FormikRadioGroup name="spendingPreference" type="radio" value="2" label="2" />
              <FormikRadioGroup name="spendingPreference" type="radio" value="3" label="3" />
              <FormikRadioGroup name="spendingPreference" type="radio" value="4" label="4" />
              <FormikRadioGroup
                name="spendingPreference"
                type="radio"
                value="Other"
                label="5 - prefer same as me"
              />
            </Question>

            <Question question="Which, out of this list, best characterize your interests? (select 3 to 6 )">
              <FormikCheckbox
                name="interests"
                type="checkbox"
                value="Programming"
                label="Programming"
              />
              <FormikCheckbox name="interests" type="checkbox" value="Reading" label="Reading" />
              <FormikCheckbox
                name="interests"
                type="checkbox"
                value="HikingCamping"
                label="Hiking/Camping"
              />
              <FormikCheckbox name="interests" type="checkbox" value="Surfing" label="Surfing" />
              <FormikCheckbox name="interests" type="checkbox" value="Sewing" label="Sewing" />
              <FormikCheckbox
                name="interests"
                type="checkbox"
                value="Designing"
                label="Designing"
              />
              <FormikCheckbox name="interests" type="checkbox" value="TV" label="Watching TV" />
              <FormikCheckbox
                name="interests"
                type="checkbox"
                value="BoardGames"
                label="Playing board games"
              />
              <FormikCheckbox
                name="interests"
                type="checkbox"
                value="Exercising"
                label="Exercising"
              />
              <FormikCheckbox
                name="interests"
                type="checkbox"
                value="CookingBaking"
                label="Cooking/Baking"
              />
              <FormikCheckbox
                name="interests"
                type="checkbox"
                value="LearningLanguages"
                label="Learning Languages"
              />
              <FormikCheckbox
                name="interests"
                type="checkbox"
                value="PlayingInstruments"
                label="Playing instruments"
              />
              <FormikCheckbox
                name="interests"
                type="checkbox"
                value="Performing"
                label="Performing"
              />
              <FormikCheckbox
                name="interests"
                type="checkbox"
                value="DIYBuilding"
                label="DIY/Building"
              />
              <FormikCheckbox
                name="interests"
                type="checkbox"
                value="VideoGames"
                label="Video Games"
              />
              <FormikCheckbox name="interests" type="checkbox" value="Dancing" label="Dancing" />
              <FormikCheckbox
                name="interests"
                type="checkbox"
                value="Photography"
                label="Photography"
              />
              <FormikCheckbox name="interests" type="checkbox" value="Writing" label="Writing" />
              <FormikCheckbox
                name="interests"
                type="checkbox"
                value="Volunteering"
                label="Volunteering"
              />
              <FormikCheckbox name="interests" type="checkbox" value="Partying" label="Partying" />
              <FormikCheckbox
                name="interests"
                type="checkbox"
                value="Adventuring"
                label="Adventuring"
              />
              <FormikCheckbox
                name="interests"
                type="checkbox"
                value="WatchingSports"
                label="Watching sports"
              />
              <FormikCheckbox
                name="interests"
                type="checkbox"
                value="PlayingSports"
                label="Playing sports"
              />
              <FormikCheckbox
                name="interests"
                type="checkbox"
                value="VloggingBlogging"
                label="Vlogging/Blogging"
              />
              <FormikCheckbox
                name="interests"
                type="checkbox"
                value="ListeningMusic"
                label="Listening to music"
              />
              <FormikCheckbox
                name="interests"
                type="checkbox"
                value="ProducingMusic"
                label="Producing music"
              />
              <FormikCheckbox
                name="interests"
                type="checkbox"
                value="GoingConcerts"
                label="Going to concerts"
              />
              <FormikCheckbox
                name="interests"
                type="checkbox"
                value="WatchingYoutube"
                label="Watching YouTube"
              />
              <FormikCheckbox
                name="interests"
                type="checkbox"
                value="WatchingGoingMovies"
                label="Watching/going to movies"
              />
              <FormikCheckbox name="interests" type="checkbox" value="Other" label="Gardening" />
              <FormikCheckbox
                name="interests"
                type="checkbox"
                value="BeingFoodie"
                label="Being a foodie"
              />
            </Question> */
}
