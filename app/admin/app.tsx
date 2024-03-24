"use client";

import simpleRestProvider from "ra-data-simple-rest";
import { Admin, Resource } from "react-admin";

import { CourseCreate } from "./course/create";
import { CourseEdit } from "./course/edit";
import { CourseList } from "./course/list";

import { UnitCreate } from "./unit/create";
import { UnitEdit } from "./unit/edit";
import { UnitList } from "./unit/list";

import { LessonCreate } from "./lesson/create";
import { LessonEdit } from "./lesson/edit";
import { LessonList } from "./lesson/list";

import { ChallengeCreate } from "./challenge/create";
import { ChallengeEdit } from "./challenge/edit";
import { ChallengeList } from "./challenge/list";

import { ChallengeOptionCreate } from "./challengeOption/create";
import { ChallengeOptionEdit } from "./challengeOption/edit";
import { ChallengeOptionList } from "./challengeOption/list";

const dataProvider = simpleRestProvider("/api");

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="courses"
        list={CourseList}
        edit={CourseEdit}
        create={CourseCreate}
        recordRepresentation="title"
      />
      <Resource
        name="units"
        list={UnitList}
        edit={UnitEdit}
        create={UnitCreate}
        recordRepresentation="title"
      />
      <Resource
        name="lessons"
        list={LessonList}
        edit={LessonEdit}
        create={LessonCreate}
        recordRepresentation="title"
      />
      <Resource
        name="challenges"
        list={ChallengeList}
        edit={ChallengeEdit}
        create={ChallengeCreate}
        recordRepresentation="question"
      />
      <Resource
        name="challengeOptions"
        list={ChallengeOptionList}
        edit={ChallengeOptionEdit}
        create={ChallengeOptionCreate}
        recordRepresentation="text"
        options={{
          label: "Challenge options",
        }}
      />
    </Admin>
  );
};

export default App;
