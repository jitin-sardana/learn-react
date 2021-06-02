export const initialState = {
  loading: false,
  loginSuccessfull: JSON.parse(localStorage.getItem('loginSuccessfull')),
  courses: null,
  allCourses: [],
  categories: null,
  selectedCategory: null,
  enrolledCourses: JSON.parse(localStorage.getItem('enrolledCourses')) || [],
  enrolledCoursesId: JSON.parse(localStorage.getItem('enrolledCoursesId')) || [],
  courseToPlay: null,
  searchCourse: null
}

export default function nextGenReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: action.payload
      }
    case "LOGIN_SUCCESS":
      state.loginSuccessfull = action.payload;
      localStorage.setItem('loginSuccessfull', action.payload);
      return {
        ...state
      }
    case "RESULTS_SUCCESS":
      const designCourses = action.payload.categories.design.courses;
      const developmentCourses = action.payload.categories.development.courses;
      const it_softwareCourses = action.payload.categories.it_software.courses;
      const marketingCourses = action.payload.categories.marketing.courses;
      const personalCourses = action.payload.categories.personal_development.courses;
      state.allCourses = [...designCourses, ...developmentCourses, ...it_softwareCourses, ...marketingCourses, ...personalCourses]
      return {
        ...state,
        courses: action.payload
      }
    case "LOAD_CATEGORIES":
      return {
        ...state,
        categories: action.payload
      }
    case "RESULTS_FAILURE":
      return {
        ...state,
        courses: action.payload
      }
    case "SELECTED_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload
      }
    case "ENROLLED_COURSE":
      state.enrolledCourses = [...state.enrolledCourses, action.payload];
      state.enrolledCoursesId = [...state.enrolledCoursesId, action.payload.course_id]

      localStorage.setItem('enrolledCourses', JSON.stringify(state.enrolledCourses));
      localStorage.setItem('enrolledCoursesId', JSON.stringify(state.enrolledCoursesId));
      return {
        ...state
      }
    case "DELETE_COURSE":
      const courseId = action.payload.course_id;
      delete state.enrolledCoursesId[state.enrolledCoursesId.indexOf(courseId)];
      state.enrolledCoursesId = state.enrolledCoursesId.filter((item) => (item != null || item != undefined))
      state.enrolledCourses = state.enrolledCourses.filter(item => item.course_title !== action.payload.course_title);

      localStorage.setItem('enrolledCourses', JSON.stringify(state.enrolledCourses));
      localStorage.setItem('enrolledCoursesId', JSON.stringify(state.enrolledCoursesId));
      return {
        ...state
      }
    case "COURSE_TO_PLAY":
      return {
        ...state,
        courseToPlay: action.payload
      }
    case "SEARCH_COURSE":
      return {
        ...state,
        searchCourse: action.payload
      }
    default:
      return state
  }
}