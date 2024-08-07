import { faker } from "@faker-js/faker";

// Helpers
const getYesterday = (): Date => {
    const now = new Date(Date.now());
    now.setDate(now.getDate() - 1);
    return now;
};

describe("Lets get to know faker", () => {
    test("strings", () => {
        console.log(faker.string.alpha());
        console.log(faker.string.alphanumeric());
        console.log(faker.string.binary());
        console.log(faker.string.fromCharacters("$#"));
        console.log(faker.string.hexadecimal());
        console.log(faker.string.numeric());
        console.log(faker.string.octal());
        console.log(faker.string.sample());
        console.log(faker.string.symbol());
        console.log(faker.string.uuid());
    });

    test("colors", () => {
        console.log(faker.color.human());
        console.log(faker.color.rgb());
    });

    test("date", () => {
        console.log(faker.date.anytime());
        console.log(faker.date.between({ from: getYesterday(), to: Date.now() }));
        console.log(faker.date.future());
        console.log(faker.date.past());
        console.log(faker.date.recent());
        console.log(faker.date.soon());
        console.log(faker.date.weekday());
    });

    test("person", () => {
        // console.log(faker.person.bio());
        // console.log(faker.person.gender());
        // console.log(faker.person.jobArea());
        // console.log(faker.person.jobDescriptor());
        // console.log(faker.person.jobTitle());
        // console.log(faker.person.jobType());
        // console.log(faker.person.middleName());
        // console.log(faker.person.sex());
        // console.log(faker.person.suffix());
        // console.log(faker.person.zodiacSign());
        console.log(faker.person.firstName());
        console.log(faker.person.fullName());
        console.log(faker.person.lastName());
        console.log(faker.person.prefix());
        console.log(faker.person.sexType());
    });

    test("number", () => {
        console.log(faker.number.bigInt());
        console.log(faker.number.binary());
        console.log(faker.number.float());
        console.log(faker.number.hex());
        console.log(faker.number.int());
        console.log(faker.number.octal());
    });

    test("misc", () => {
        console.log(faker.datatype.boolean());
        console.log(faker.company.name());
    });
});
