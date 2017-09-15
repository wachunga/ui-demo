import React from 'react';

export default function createProvidersWrapper(providerConfigurations: any[]) {
  let Wrapper;
  providerConfigurations.reverse().forEach((providerOrProviderConfiguration, i) => {
    if (!providerOrProviderConfiguration) {
      return;
    }

    let ProviderComponent = providerOrProviderConfiguration;
    let providerProps = {};
    if (Array.isArray(providerOrProviderConfiguration)) {
      [ProviderComponent, providerProps] = providerOrProviderConfiguration;
    }

    if (Wrapper) {
      const PrevWrapper = Wrapper;
      Wrapper = props => {
        return (
          <ProviderComponent {...providerProps}>
            <PrevWrapper {...props} />
          </ProviderComponent>
        );
      };
    } else {
      Wrapper = props => {
        return <ProviderComponent {...providerProps}>{props.children}</ProviderComponent>;
      };
    }
  });

  return Wrapper;
}
