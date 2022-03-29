import { shallow, mount } from "enzyme";
import React from "react";
import { Notifications } from "./Notifications";
import { fetchNotifications } from "../actions/notificationActionCreators";
import { getLatestNotification } from "../utils/utils";
import { StyleSheetTestUtils } from "aphrodite";
import notificationsNormalizer from "../schema/notifications";
import {NotificationsContainer} from "./NotificationsContainer";
import { Map, fromJS } from "immutable";

const NOTIFICATIONS = [
  {
    id: "5debd76480edafc8af244228",
    author: {
      id: "5debd764a7c57c7839d722e9",
      name: {
        first: "Poole",
        last: "Sanders",
      },
      email: "poole.sanders@holberton.nz",
      picture: "http://placehold.it/32x32",
      age: 25,
    },
    context: {
      guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
      isRead: true,
      type: "urgent",
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  },
  {
    id: "5debd764507712e7a1307303",
    author: {
      id: "5debd7648ba8641ce0a34ea4",
      name: {
        first: "Norton",
        last: "Grimes",
      },
      email: "norton.grimes@holberton.nz",
      picture: "http://placehold.it/32x32",
      age: 37,
    },
    context: {
      guid: "cec84b7a-7be4-4af0-b833-f1485433f66e",
      isRead: false,
      type: "urgent",
      value:
        "ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra adipiscing. Ac tortor dignissim convallis aenean et. ",
    },
  },
  {
    id: "5debd76444dd4dafea89d53b",
    author: {
      id: "5debd764a7c57c7839d722e9",
      name: {
        first: "Poole",
        last: "Sanders",
      },
      email: "poole.sanders@holberton.nz",
      picture: "http://placehold.it/32x32",
      age: 25,
    },
    context: {
      guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
      isRead: false,
      type: "urgent",
      value:
        "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed",
    },
  },
];

describe("<Notifications />", () => {
  let listNotifications;
  let latestNotification;

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("Notifications renders without crashing", () => {
    const wrapper = shallow(<Notifications fetchNotifications={fetchNotifications}/>);
    expect(wrapper.exists()).toEqual(true);
  });
  it("div.Notifications is not being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications fetchNotifications={fetchNotifications}/>);
    wrapper.update();
    const item = wrapper.find("Notifications_hz9cov");
    expect(item).toHaveLength(0);
  });
  it("menu item is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} fetchNotifications={fetchNotifications}/>);
    wrapper.update();
    const item = wrapper.find('p');
    expect(item).toHaveLength(2);
  });
  it("div.Notifications is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} fetchNotifications={fetchNotifications}/>);
    wrapper.update();
    const item = wrapper.find(".Notifications_hz9cov");
    expect(item).toHaveLength(1);
  });

  describe("Notifications with listNotifications", () => {
    beforeEach(() => {
      latestNotification = getLatestNotification();
      listNotifications = {
        1: { guid: 1, type: "default", value: "New course available" },
        2: { guid: 2, type: "urgent", value: "New resume available" },
        3: { guid: 3, type: "urgent", html: { __html: latestNotification } },
      };
    });

    it("Notifications renders Notification Items and items have correct html", () => {
      const wrapper = mount(
        <Notifications displayDrawer listNotifications={listNotifications} fetchNotifications={fetchNotifications}/>
      );
      expect(wrapper.exists());
      wrapper.update();
      const listItems = wrapper.find("NotificationItem");
      expect(listItems).toBeDefined();
      expect(listItems).toHaveLength(3);
      // expect(listItems.at(0).contains()).toEqual(
      //   '<li data-notification-type="default">New course available</li>'
      // );
      expect(listItems.at(0).html()).toContain("<li");
      expect(listItems.at(0).props().type).toEqual("default");
      expect(listItems.at(0).text()).toEqual("New course available");

      // expect(listItems.at(1).html()).toEqual(
      //   '<li data-notification-type="urgent">New resume available</li>'
      // );

      expect(listItems.at(1).html()).toContain("<li");
      expect(listItems.at(1).props().type).toEqual("urgent");
      expect(listItems.at(1).text()).toEqual("New resume available");

      // expect(listItems.at(2).html()).toEqual(
      //   `<li data-notification-type="urgent">${latestNotification}</li>`
      // );

      expect(listItems.at(2).html()).toContain("<li");
      expect(listItems.at(2).props().type).toEqual("urgent");
      expect(listItems.at(2).text()).toEqual(
        "Urgent requirement - complete by EOD"
      );
    });
  });

  describe("Notifications without listNotifications or empty listNotifications", () => {
    beforeEach(() => {
      listNotifications = [];
    });
    it("verify that the function fetchNotifications is called when the component is mounted", () => {
      const fetchNotifications = jest.fn();
      const wrapper = shallow(
        <NotificationsContainer fetchNotifications={fetchNotifications} />
      );

      expect(fetchNotifications).toHaveBeenCalled();

      jest.restoreAllMocks();
    });
  });
});
