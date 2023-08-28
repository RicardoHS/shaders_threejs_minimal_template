#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;
	vec2 ms = u_mouse.xy/u_resolution;
    float r = (st.y+ms.x)*0.5;
    float g = (st.y+ms.y)*0.5;
    float b = abs(sin(u_time*2.));
    float alpha = 1.0;
	gl_FragColor = vec4(r,g,b,alpha);
}