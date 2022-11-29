import React, { FC, memo } from 'react';
import WhatsappSvg from '../svg/whatsapp.svg';

export interface IWhatsappIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WhatsappIcon: FC<IWhatsappIconProps> = memo(props => {
  return <WhatsappSvg {...props} />;
});
