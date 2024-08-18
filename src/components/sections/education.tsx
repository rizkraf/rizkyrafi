import PAST_EDUCATION from '@/data/education';

export default function Education() {
  return (
    <div className="mb-16">
      <h2 className="mb-8 text-xl font-heading sm:text-2xl">Education</h2>

      {PAST_EDUCATION.map((role, id) => {
        return (
          <div className="mb-8" key={role.institution}>
            <h3 className="text-lg font-heading sm:text-xl">
              {role.degree} @ {role.institution}
            </h3>

            <p className="mb-4 mt-0.5 text-sm">
              {role.startDate} - {role.endDate}
            </p>
            <p>{role.description}</p>
          </div>
        );
      })}
    </div>
  );
}
