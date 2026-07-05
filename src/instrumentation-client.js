export function reportWebVitals(metric) {
  window.gtag("event", metric.name, {
    value: metric.value,
    metric_id: metric.id,
    metric_delta: metric.delta,
  });
}