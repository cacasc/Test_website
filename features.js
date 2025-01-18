
export const calculateSpaces = (pakage) => {
    // Extract attributes from the package
    const {
        Lecture_mode,
        "#Mentorship_sessions": Mentorship_sessions,
        Weekend_batch,
        "#Full_length_mocks": Full_length_mocks,
        "#Sectional_tests": Sectional_tests,
        CAT_National_benchmarking,
        CAT_OMETS_access,
        CAT_Profile_SOP_evaluation,
        "#CAT_Mock_interview_online": Mock_interview_online,
        "#CAT_Mock_interview_offline": Mock_interview_offline,
        Subjects,
        Coaching_type,
        "L2_Classification":L2_classification
    } = pakage;

    // Log extracted variables
    console.log("Extracted values:", {
        Lecture_mode,
        Mentorship_sessions,
        Weekend_batch,
        Full_length_mocks,
        Sectional_tests,
        CAT_National_benchmarking,
        CAT_OMETS_access,
        CAT_Profile_SOP_evaluation,
        Mock_interview_online,
        Mock_interview_offline,
        Subjects,
        Coaching_type,
        L2_classification
    });


    // Variables for Space 1 to Space 6
    let S1 = "", S2 = "", S3 = "", S4 = "", S5 = "", S6 = "";

    // Logic for Lecture Mode
    let Lecture_modevariable = "NA";
    if (Lecture_mode === 1) Lecture_modevariable = "Live classes with recording";
    else if (Lecture_mode === 2) Lecture_modevariable = "Live classes, no recordings available";
    else if (Lecture_mode === 3) Lecture_modevariable = "Offline classes";
    else if (Lecture_mode === 4) Lecture_modevariable = "Recorded lectures";

    // Mentorship Sessions
    let Mentorship_sessionsvariable = Mentorship_sessions > 0
        ? `Upto ${Mentorship_sessions} mentorship sessions`
        : "NA";

    // Weekend Batch
    let Weekend_batchvariable = Weekend_batch === 1 ? "; Weekend batches available" : "";

    // Full-length Mock Tests
    let Fulllengthmockvariable = Full_length_mocks > 0
        ? `Upto ${Full_length_mocks} full-length mock tests`
        : "NA";

    // Sectional Tests
    let Sectionaltestsvariable = Sectional_tests > 0
        ? `; Upto ${Sectional_tests} sectional tests`
        : "NA";

    // National Benchmarking
    let Nationalbenchmarkingvariable = CAT_National_benchmarking === 1
        ? "Includes National benchmarking for mocks"
        : "NA";

    // OMETS Access
    let OMETSaccessvariable = L2_classification === "CAT"
        ? (CAT_OMETS_access === 1 ? "OMETS included" : "NA")
        : "";

        console.log("CAT_OMETS_access:", CAT_OMETS_access);

    // Profile_SOP Evaluation
    let Profile_SOPvariable = CAT_Profile_SOP_evaluation === 1
        ? "Includes Profile / SOP evaluation"
        : "Profile / SOP evaluation not available";

        console.log("CAT_Profile_SOP_evaluation:", CAT_Profile_SOP_evaluation);

    // Online Mock Interviews
    let onlineinterviewsvariable = Mock_interview_online > 0
        ? `Upto ${Mock_interview_online} online mock interviews`
        : "NA";

    // Offline Mock Interviews
    let offlineinterviewsvariable = Mock_interview_offline > 0
        ? `Upto ${Mock_interview_offline} offline mock interviews`
        : "NA";

    // Space Assignment Based on Coaching Type
    switch (Coaching_type) {
        case "Full course":
        case "Crash course":
            S1 = Lecture_modevariable;
            S2 = Mentorship_sessionsvariable;
            S3 = Weekend_batchvariable;
            S4 = OMETSaccessvariable;
            S5 = Fulllengthmockvariable;
            S6 = Sectionaltestsvariable;
            break;

        case "Test series":
            S1 = Nationalbenchmarkingvariable;
            S2 = Fulllengthmockvariable;
            S3 = Sectionaltestsvariable;
            break;

        case "WAT / GDPI prep":
            S1 = Profile_SOPvariable;
            S2 = onlineinterviewsvariable;
            S3 = offlineinterviewsvariable;
            break;
    }

    return { S1, S2, S3, S4, S5, S6 };
};
