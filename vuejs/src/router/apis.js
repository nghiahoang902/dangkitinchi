import { host } from "../stores/system";

export default {
  login: host.api_tinchi + '/login',
  user : host.api_tinchi + '/users',
  edu_program : host.api_tinchi +'/edu-program',
  ps_section_class : host.api_tinchi +'/ps-section-class',
  register_class : host.api_tinchi + '/register-class',
  getListSubject : subjectID => host.api_tinchi +'/list-subject/'+ subjectID,
};
