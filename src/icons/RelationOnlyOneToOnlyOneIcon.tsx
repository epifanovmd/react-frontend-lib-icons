import React, { FC, memo } from 'react';
import RelationOnlyOneToOnlyOneSvg from '../svg/relation-only-one-to-only-one.svg';

export interface IRelationOnlyOneToOnlyOneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationOnlyOneToOnlyOneIcon: FC<IRelationOnlyOneToOnlyOneIconProps> = memo(props => {
  return <RelationOnlyOneToOnlyOneSvg {...props} />;
});
