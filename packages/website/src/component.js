import Component from '@vanilla-jsx/component';

const EventListener = ({ is: Is = 'event-listener', children, name, on, ...props }) => {
    const component = <Is {...props}>{children}</Is>;

    component.addEventListener(name, on);

    return component;
}

const imgConst = <img src="https://img.souche.com/684fcf0f15a4508f613ea2ecddc5e7de.jpg"></img>;

const Content = Component(({ img }, ctx) => {
    return () => {
        return <>
            <style>{`
pre {
    padding: 32px;
    color: #333;
    background: #eee;
    overflow: scroll;
}
.event-button {
    margin-right: 12px;
}
.img > img {
    width: 100px;
    margin-right: 12px;
}
`}</style>
            <a href="#/">back Home</a>
            <h1>@vanilla-jsx/component</h1>
            <p>define a component with state.</p>
            <pre><code>{`
import Component from '@vanilla-jsx/component'

const Content = Component((props, ctx) => {
    // run here once after Content component inited.
    return () => {
        // run here when ctx.render() every time.
        return <div></div>
    }
});

document.body.append(<Content />);
`}</code></pre>
            <p>get/set state from ctx</p>
            <EventListener class="event-button" is="button" name="click" on={() => {
                ctx.num = ctx.num || 0;
                ctx.num += 1;
                ctx.render();
            }}>click me</EventListener>{ctx.num || ''}
            <pre><code>{`
const EventListener = ({ is: Is = 'event-listener', children, name, on, ...props }) => {
    const component = <Is {...props}>{children}</Is>;

    component.addEventListener(name, on);

    return component;
}

const Content = Component((props, ctx) => {
    return () => {
        <EventListener class="event-button" is="button" name="click" on={() => {
            ctx.num = ctx.num || 0;
            ctx.num += 1;
            ctx.render();
        }}>click me</EventListener>{ctx.num || ''}
    }
});
`}</code></pre>
            <p>staticize node used props from static parent or js const.</p>
            <div class="img">{img} {imgConst}</div>
            <EventListener class="event-button" is="button" name="click" on={() => {
                ctx.num = ctx.num || 0;
                ctx.num += 1;
                ctx.render();
            }}>click me</EventListener> and next img are reload because of Content rerender
            <div class="img"><img src="https://img.souche.com/684fcf0f15a4508f613ea2ecddc5e7de.jpg"></img></div>
            <pre><code>{`
const imgConst = <img src="https://img.souche.com/684fcf0f15a4508f613ea2ecddc5e7de.jpg"></img>;

const Content = Component(({ img }, ctx) => {
    return () => {
        {img} {imgConst}
        <EventListener class="event-button" is="button" name="click" on={() => {
            ctx.num = ctx.num || 0;
            ctx.num += 1;
            ctx.render();
        }}>click me</EventListener> and next img are reload because of Content rerender
        <img src="https://img.souche.com/684fcf0f15a4508f613ea2ecddc5e7de.jpg"></img>
    }
});
document.body.append(<Content src="https://img.souche.com/684fcf0f15a4508f613ea2ecddc5e7de.jpg"></Content>);
`}</code></pre>
            <h3>simple router</h3>
            <pre><code>{`
const Page1 = () => <div>Page 1</div>;
const Page2 = () => <div>Page 2</div>;

const Root = Component((_, ctx) => {
    window.addEventListener('hashchange', () => ctx.render());

    return () => {
        if (location.hash === '#/page2') {
            return <Page2></Page2>;
        } else {
            return <Page1></Page1>;
        }
    }
});

document.body.append(<Root />);
`}</code></pre>
        </>
    }
});

export default () => <Content img={<img src="https://img.souche.com/684fcf0f15a4508f613ea2ecddc5e7de.jpg"></img>}></Content>;
