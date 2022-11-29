import React, { FC, memo } from 'react';
import RelationOneOrManyToOnlyOneSvg from '../svg/relation-one-or-many-to-only-one.svg';

export interface IRelationOneOrManyToOnlyOneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationOneOrManyToOnlyOneIcon: FC<IRelationOneOrManyToOnlyOneIconProps> = memo(props => {
  return <RelationOneOrManyToOnlyOneSvg {...props} />;
});
