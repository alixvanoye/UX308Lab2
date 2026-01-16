import { number2letter } from '../number2letter.js'

describe("it converts number grade to letter grade", function(){
    it("handles A", function(){
        let sGrade = number2letter(83);
        expect(sGrade).toBe("A");
    })
    it("handles B", function(){
        let sGrade = number2letter(73);
        expect(sGrade).toBe("B");
    })
    it("handles C", function(){
        let sGrade = number2letter(68);
        expect(sGrade).toBe("C");
    })
    it("handles D", function(){
        let sGrade = number2letter(51);
        expect(sGrade).toBe("D");
    })
    it("handles F", function(){
        let sGrade = number2letter(32);
        expect(sGrade).toBe("F");
    })
})