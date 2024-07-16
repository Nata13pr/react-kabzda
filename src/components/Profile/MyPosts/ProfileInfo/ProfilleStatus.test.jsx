import React from "react";
import TestRenderer from "react-test-renderer";
import ProfileStatus from "../../ProfileStatus";


describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = TestRenderer.create(<ProfileStatus status="it-kamasutra.com" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("it-kamasutra.com");
    });

    test("after creation <span> should be displayed", () => {
        const component = TestRenderer.create(<ProfileStatus status="it-kamasutra.com" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("after creation <input> shouldn't be displayed", () => {
        const component = TestRenderer.create(<ProfileStatus status="it-kamasutra.com" />);
        const root = component.root;
        expect(() => {
            root.findByType("input");
        }).toThrow();
    });

    test("after creation <span> should contain correct status", () => {
        const component = TestRenderer.create(<ProfileStatus status="it-kamasutra.com" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("it-kamasutra.com");
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = TestRenderer.create(<ProfileStatus status="it-kamasutra.com" />);
        const root = component.root;
        let span = root.findByType("span");

        // Simulate double click
        TestRenderer.act(() => {
            span.props.onDoubleClick();
        });

        let input = root.findByType("input");
        expect(input.props.value).toBe("it-kamasutra.com");
    });
    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = TestRenderer.create(
            <ProfileStatus status="it-kamasutra.com" updateUserStatus={mockCallback} />
        );
        const instance = component.getInstance();

        // Assuming deactivateEditMode is a method on your ProfileStatus component
        instance.deactivateEditMode();

        expect(mockCallback).toHaveBeenCalledTimes(1);
    });
});