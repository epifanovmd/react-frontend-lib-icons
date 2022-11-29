import React, { FC, memo } from 'react';
import HubspotSvg from '../svg/hubspot.svg';

export interface IHubspotIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HubspotIcon: FC<IHubspotIconProps> = memo(props => {
  return <HubspotSvg {...props} />;
});
